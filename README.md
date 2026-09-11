## Hi there 👋

<!--
**gerikah/gerikah** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->


## Portfolio development

A single React page contains About, five project folders, and Contact. Projects have three states: closed, a concise preview, and the full study expanded in the same folder. Hash links such as `/#gcs` open a preview. There are no separate Works or project routes.

- `src/components/portfolio.jsx`: React state, folder components, Motion animations, hash navigation, and keyboard support.
- `src/content/`: original project documents and About/Contact copy, parsed into React elements while preserving custom layouts.
- `src/data/folders.js`: ordered, structured project entries with metadata, preview images, design focus, and full content.
- `src/data/image-dimensions.js`: original image dimensions for stable layout during loading.
- `src/entry.jsx` and `src/render.jsx`: client hydration and server rendering.
- `folder.css` and `styles.css`: folder styling, natural image layouts, and responsive typography.
- `assets/background image.png`: the supplied landing-page paper texture; fonts are hosted locally in `assets/fonts/`.

Run `npm start` for development at `http://localhost:4173`; reload the page after editing (the server rebuilds the React bundle on request). Run `npm run build` to validate the assets and create the prerendered page and production bundle in `dist/`, then `npm run preview`. Vercel uses the same build and output directory.

Run `npm run build` followed by `npm test` for the Playwright checks. Tests cover content preservation, all folder states, five screen sizes, natural image proportions, hash history, keyboard controls, and reduced motion. Tests use installed Chrome on Windows, or Playwright Chromium elsewhere (`npx playwright install chromium`). Set `CHROME_PATH` to use another installed Chrome executable. Set `PORTFOLIO_URL` to test an already-running server instead of starting the test server.

On PowerShell with script execution disabled, use `npm.cmd` in place of `npm`.
