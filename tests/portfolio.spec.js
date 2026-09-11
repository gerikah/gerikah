import { test, expect } from '@playwright/test';
import { readFile, readdir } from 'node:fs/promises';

const ids = ['about', 'gcs', 'off-the-rack', 'riftbound', 'flowcharts-process-mapping', 'marci-metzger-homes', 'contact'];
const baseline = JSON.parse(await readFile(new URL('./fixtures/content-before.json', import.meta.url), 'utf8'));

async function settledTab(page, id) {
  await expect.poll(() => page.locator(`#tab-${id}`).evaluate(el => {
    return Math.abs(el.getBoundingClientRect().top - document.querySelector('.header-shell').getBoundingClientRect().height - 16);
  })).toBeLessThan(2);
}

async function fixedOrder(page) {
  await expect(page.locator('.folder-stack')).toHaveCount(1);
  expect(await page.locator('.folder-sheet').evaluateAll(elements => elements.map(el => el.id))).toEqual(ids);
  await expect(page.locator('.folder-sheet.is-open')).toHaveCount(1);
}

async function noOverflow(page) {
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
}

test('all original content and images survive the preview/full migration', async ({ page, request }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  await page.goto('/');
  const originals = [];
  for (const id of ids) {
    await page.locator(`#tab-${id}`).click();
    await settledTab(page, id);
    if (!['about', 'contact'].includes(id)) {
      await expect(page.locator(`#${id} .folder-document`)).toHaveCount(0);
      await expect(page.locator(`#${id} .project-image`)).toHaveCount(1);
      await page.locator(`#more-${id}`).click();
      await expect(page.locator(`#${id}`)).toHaveAttribute('data-state', 'full');
    }
    const preserved = await page.locator(`#${id}`).evaluate((folder, old) => {
      const normalized = text => text.replace(/\s+/g, ' ').trim();
      const currentText = normalized(folder.textContent);
      const images = [...folder.querySelectorAll('img')].map(img => img.getAttribute('src'));
      return { missingText: old.text.filter(text => !currentText.includes(normalized(text))), missingImages: old.images.filter(src => !images.includes(src)), images };
    }, baseline[id]);
    expect(preserved.missingText, id).toEqual([]);
    expect(preserved.missingImages, id).toEqual([]);
    originals.push(...preserved.images);
    await page.locator(`#${id} details`).evaluateAll(elements => elements.forEach(el => el.open = true));
    const badImages = await page.locator(`#${id} img`).evaluateAll(async elements => {
      await Promise.all(elements.map(img => { img.loading = 'eager'; return img.decode().catch(() => {}); }));
      return elements.filter(img => !img.naturalWidth).map(img => img.src);
    });
    expect(badImages).toEqual([]);
    await fixedOrder(page);
  }
  const files = (await readdir('assets/projects', { recursive: true })).filter(path => /\.(png|jpg)$/i.test(path));
  const shown = new Set(originals.map(src => decodeURIComponent(src).replace('/assets/projects/', '')));
  expect(files.filter(path => !shown.has(path.replaceAll('\\', '/')))).toEqual([]);
  expect(errors).toEqual([]);
  for (const route of ['/works', ...ids.slice(1, -1).map(id => `/works/${id}`)]) expect((await request.get(route)).status()).toBe(404);
  await expect(page.locator('a[href*="/works"], footer')).toHaveCount(0);
});

for (const [width, height] of [[1440, 900], [1366, 768], [768, 1024], [390, 844], [320, 568]]) {
  test(`three folder states and original image proportions at ${width}×${height}`, async ({ page }) => {
    await page.setViewportSize({ width, height });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    const visible = await page.locator('.folder-tab').evaluateAll(tabs => tabs.filter(tab => tab.getBoundingClientRect().top + 24 <= innerHeight).length);
    expect(visible).toBeGreaterThanOrEqual(width > 1000 ? 3 : 1);
    expect(await page.locator('.landing-background').evaluate(el => getComputedStyle(el).backgroundImage)).toContain('background%20image.png');
    expect(await page.locator('.hero-design').evaluate(el => getComputedStyle(el).fontFamily)).toContain('Instrument Serif');
    expect(await page.locator('.hero-build').evaluate(el => getComputedStyle(el).fontFamily)).toContain('Manrope');
    for (const id of ids) {
      await page.locator(`#tab-${id}`).click();
      await settledTab(page, id);
      await fixedOrder(page);
      await expect(page.locator(`#tab-${id}`)).toHaveAttribute('aria-expanded', 'true');
      expect(await page.locator(`#panel-${id}`).evaluate(el => el.inert)).toBe(false);
      await noOverflow(page);
      if (!['about', 'contact'].includes(id)) {
        if (width > 1000) expect((await page.locator(`#${id}`).boundingBox()).height).toBeLessThan(height * 2);
        const more = page.locator(`#more-${id}`);
        await expect(more).toHaveAccessibleName('Know more about this project');
        await expect(page.locator(`#${id} .folder-document`)).toHaveCount(0);
        await more.click();
        await expect(more).toHaveAccessibleName('Show less');
        await expect(page.locator(`#${id}`)).toHaveAttribute('data-state', 'full');
        await expect(page.locator(`#${id} .case-section`).first()).toBeVisible();
        await noOverflow(page);
        const treatments = await page.locator(`#${id} .project-image, #${id} .folder-document img`).evaluateAll(images => images.filter(img => img.getBoundingClientRect().height).map(img => {
          const style = getComputedStyle(img), rect = img.getBoundingClientRect();
          return { ratioError: Math.abs(rect.width / rect.height - Number(img.getAttribute('width')) / Number(img.getAttribute('height'))), background: style.backgroundColor, border: style.borderTopWidth, radius: style.borderRadius, shadow: style.boxShadow };
        }));
        expect(treatments.every(img => img.ratioError < 0.01 && img.background === 'rgba(0, 0, 0, 0)' && img.border === '0px' && img.radius === '0px' && img.shadow === 'none')).toBe(true);
        await more.click();
        await expect(more).toHaveAccessibleName('Know more about this project');
        await expect(page.locator(`#${id} .folder-document`)).toHaveCount(0);
        await expect(page.locator(`#${id}`)).toHaveAttribute('data-state', 'preview');
        await expect(page.locator(`#tab-${id}`)).toHaveAttribute('aria-expanded', 'true');
      }
      // Switching tests above include About/Contact and reset the previous project.
    }
    await page.locator('#contact [data-close-folder]').click();
    await expect(page.locator('.folder-sheet.is-open')).toHaveCount(0);
    await expect(page.locator('#tab-contact')).toBeFocused();
    await page.goto('/');
    await page.screenshot({ path: `.preview/react-landing-${width}.png` });
  });
}

test('hash history, full-state reset, and keyboard access', async ({ page }) => {
  await page.goto('/#gcs');
  await settledTab(page, 'gcs');
  await expect(page.locator('#gcs')).toHaveAttribute('data-state', 'preview');
  await page.locator('#more-gcs').click();
  await page.locator('#tab-riftbound').click();
  await settledTab(page, 'riftbound');
  await expect(page.locator('.full-study')).toHaveCount(0);
  await page.goBack();
  await settledTab(page, 'gcs');
  await expect(page.locator('#gcs')).toHaveAttribute('data-state', 'preview');
  await page.goForward();
  await settledTab(page, 'riftbound');
  await page.locator('#tab-riftbound').focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.folder-sheet.is-open')).toHaveCount(0);
  await page.keyboard.press('Space');
  await expect(page.locator('#riftbound')).toHaveAttribute('data-state', 'preview');
  await page.keyboard.press('ArrowUp');
  await expect(page.locator('#tab-off-the-rack')).toBeFocused();
  await page.keyboard.press('Home');
  await expect(page.locator('#tab-about')).toBeFocused();
  await page.keyboard.press('End');
  await expect(page.locator('#tab-contact')).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(page.locator('.folder-sheet.is-open')).toHaveCount(0);
  await page.goto('/#about');
  await page.getByRole('link', { name: 'View related work' }).click();
  await expect(page.locator('#flowcharts-process-mapping')).toHaveAttribute('data-state', 'preview');
  await page.goto('/#contact');
  await page.getByRole('link', { name: 'Back to top' }).click();
  await expect.poll(() => page.evaluate(() => scrollY)).toBe(0);
  await expect(page.locator('.folder-sheet.is-open')).toHaveCount(0);
});

test('Motion entrance, hover, height transitions, rapid switching and live reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  await page.waitForTimeout(1000);
  await page.locator('#tab-gcs').hover();
  await expect.poll(() => page.locator('#tab-gcs').evaluate(el => new DOMMatrix(getComputedStyle(el).transform).m42)).toBeLessThan(-2);
  await page.locator('#tab-gcs').click();
  await settledTab(page, 'gcs');
  await page.locator('#more-gcs').click();
  await expect(page.locator('#gcs')).toHaveAttribute('data-state', 'full');
  await page.waitForTimeout(500);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('#gcs')).toHaveAttribute('data-state', 'full');
  expect(await page.locator('.landing-background').evaluate(el => new DOMMatrix(getComputedStyle(el).transform).m11)).toBe(1);
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.evaluate(() => {
    document.getElementById('tab-about').click();
    document.getElementById('tab-contact').click();
    document.getElementById('tab-off-the-rack').click();
  });
  await settledTab(page, 'off-the-rack');
  await fixedOrder(page);
  await expect(page.locator('#off-the-rack')).toHaveAttribute('data-state', 'preview');
  await expect(page.locator('.full-study')).toHaveCount(0);
  await page.locator('#more-off-the-rack').click();
  await page.waitForTimeout(900);
  await page.locator('#off-the-rack .show-less-end').click();
  await expect(page.locator('#off-the-rack')).toHaveAttribute('data-state', 'preview');
  await expect(page.locator('#more-off-the-rack')).toBeFocused();
  // Near the page end, scrolling naturally clamps at the document bottom.
  await expect.poll(() => page.locator('#more-off-the-rack').evaluate(el => {
    const box = el.getBoundingClientRect();
    return box.top >= 78 && box.bottom < innerHeight;
  })).toBe(true);
});
