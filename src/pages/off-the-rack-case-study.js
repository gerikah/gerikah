import { OFF_THE_RACK_ASSETS as assets } from "../data/assets.js";

function progressImage(src, caption, className = "") {
  return `<figure class="off-rack-screen ${className}"><a href="${src}" target="_blank" rel="noopener noreferrer" aria-label="Open full-size image: ${caption}"><img src="${src}" alt="${caption}" loading="lazy" decoding="async" /></a><figcaption>${caption}</figcaption></figure>`;
}

function gallery(items, className = "") {
  return `<div class="off-rack-gallery ${className}">${items.map(([src, caption]) => progressImage(src, caption)).join("")}</div>`;
}

export function offRackCover() {
  return `<img class="off-rack-cover" src="${assets.hero}" alt="Off the Rack website progress: storefront, brand story, and inquiry form" fetchpriority="high" />`;
}

export function offRackCaseSections() {
  return `<div class="case-body off-rack-case-body">
    <section class="case-section"><h2>The challenge</h2><div>
      <p>Off the Rack sells one-of-one pieces rather than products that can be continuously restocked. A typical e-commerce flow could create confusion when an item becomes unavailable or when payment and delivery details still need to be confirmed manually.</p>
      <p>The challenge was to create a polished, easy-to-browse shopping experience that supports a small handmade fashion business: communicate availability, preserve sold pieces as a creative archive, and give the administrator a practical way to manage products and inquiries.</p>
      <p><strong>Platform:</strong> Responsive Web<br /><strong>Scope:</strong> Customer Storefront and Admin Dashboard</p>
    </div></section>
    <section class="case-section"><h2>Mapping the experience</h2><div>
      <p>I divided the experience into two connected sides: the customer storefront and the admin dashboard.</p>
      <h3>Customer experience</h3>
      <p class="off-rack-journey">Discover → Browse → View product → Submit inquiry → Receive confirmation</p>
      <p>Visitors can explore featured pieces, browse and filter the catalog, open product pages, and inquire about an available item. Sold products move into the Archive, where they continue to represent the brand’s previous work and visual identity.</p>
      <h3>Admin experience</h3>
      <p class="off-rack-journey">Sign in → Review dashboard → Manage products → Update availability → Handle inquiries</p>
      <p>The admin workflow covers creating and editing products, organizing categories, changing availability, archiving sold items, and reviewing inquiries. Separating these tools from the storefront keeps management focused behind authenticated access.</p>
      ${progressImage(assets.sitemap, "Sitemap — connecting storefront discovery with catalog and inquiry management", "off-rack-sitemap")}
      <h3>Initial layout wireframes</h3>
      <p>These early layouts establish the content hierarchy and the main customer and admin tasks. Select any image to inspect it at full size.</p>
      ${gallery([
        [assets.wireframes.home, "Initial wireframe — homepage"],
        [assets.wireframes.shop, "Initial wireframe — shop catalog"],
        [assets.wireframes.product, "Initial wireframe — product details"],
        [assets.wireframes.inquiry, "Initial wireframe — inquiry form"],
      ], "off-rack-wireframes")}
      <details class="off-rack-details"><summary>View the four admin wireframes</summary>
        ${gallery([
          [assets.wireframes.adminDashboard, "Initial wireframe — admin dashboard"],
          [assets.wireframes.adminProducts, "Initial wireframe — product management"],
          [assets.wireframes.adminCategories, "Initial wireframe — category management"],
          [assets.wireframes.adminInquiries, "Initial wireframe — inquiry management"],
        ], "off-rack-wireframes")}
      </details>
    </div></section>
    <section class="case-section"><h2>Design decisions</h2><div>
      <h3>Treating the website as a digital lookbook</h3>
      <p>Large product imagery, editorial layouts, and restrained typography let the customized denim carry the visual identity. The interface is designed to feel like an independent fashion label.</p>
      <h3>Using inquiries instead of checkout</h3>
      <p>Every product is unique, and payment or delivery may require direct confirmation. An inquiry-based purchasing flow gives interested customers a clear next step that fits how the business operates.</p>
      <h3>Keeping sold pieces visible</h3>
      <p>Sold items belong in an Archive instead of being removed. This creates a growing portfolio of the brand’s work while clearly separating previous pieces from available products.</p>
      <h3>Separating customer and admin tasks</h3>
      <p>The storefront prioritizes discovery and product presentation; the dashboard prioritizes inventory and inquiry management. Each side has a distinct purpose.</p>
      <h3>Building reusable patterns</h3>
      <p>Product cards, category filters, status labels, form elements, and dashboard controls follow reusable visual patterns to keep the interface consistent as the catalog grows.</p>
    </div></section>
    <section class="case-section"><h2>The interface</h2><div>
      <p class="off-rack-progress-note"><strong>In Development.</strong> These screenshots document the current interface. A live version is available while development continues. Product image uploading still needs to be completed.</p>
      <h3>Homepage and brand identity</h3>
      <p>The homepage introduces Off the Rack, highlights the current collection, and tells the story behind its one-of-one pieces. The current new-arrivals and featured sections show the catalog’s empty state.</p>
      ${gallery([
        [assets.screens.homepage, "Current interface — homepage hero"],
        [assets.screens.newArrivals, "Current interface — new arrivals and empty catalog state"],
        [assets.screens.homepageAbout, "Current interface — the story behind the denim"],
        [assets.screens.featured, "Current interface — featured works and custom inquiries"],
      ], "off-rack-gallery-wide")}
      <details class="off-rack-details"><summary>View the About page and footer</summary>
        ${gallery([
          [assets.screens.about, "Current interface — About page"],
          [assets.screens.process, "Current interface — the making process"],
          [assets.screens.footer, "Current interface — mailing list and footer"],
        ], "off-rack-gallery-wide")}
      </details>
      <h3>Shop, product details, and Archive</h3>
      <p>The shop is designed around search, filters, sorting, and availability indicators. Product pages provide larger imagery, sizing or condition details, and a direct path to inquire. The Archive preserves sold pieces without presenting them as available. The shop and product layouts are shown in the initial wireframes above.</p>
      <h3>Inquiry flow</h3>
      <p>The inquiry form collects contact details and product interest so availability, payment, and delivery can be confirmed manually. The contact page also provides paths for general questions and custom requests.</p>
      ${gallery([
        [assets.screens.inquiry, "Current interface — purchase and custom inquiry form"],
        [assets.screens.contact, "Current interface — contact and inquiry options"],
      ], "off-rack-gallery-wide")}
      <h3>Admin dashboard and catalog management</h3>
      <p>The dashboard provides an overview of products, inventory status, and inquiries. Category management organizes the catalog. Product and inquiry management workflows cover creating, editing, archiving, and removing products, as well as reviewing requests and tracking their status.</p>
      ${gallery([
        [assets.screens.adminDashboard, "Current interface — admin dashboard with an empty catalog"],
        [assets.screens.adminCategories, "Current interface — category management"],
      ], "off-rack-gallery-wide")}
    </div></section>
    <section class="case-section"><h2>What I learned</h2><div>
      <p>Designing for a real small business requires understanding how it actually operates instead of automatically copying standard e-commerce patterns.</p>
      <p>Inquiries, availability statuses, and a sold-item archive came directly from the one-of-one nature of the products. They showed me how information architecture and status logic can prevent confusion for both customers and administrators.</p>
      <p>Designing the admin workflows alongside the customer journey also helped me consider the complete system: how content, inventory, and inquiries move through the platform behind the visible storefront.</p>
    </div></section>
    <section class="case-section"><h2>Limitations and next steps</h2><div>
      <p>The platform does not currently include online checkout or payment processing. Orders, payment, and delivery arrangements are confirmed manually after an inquiry is submitted.</p>
      <p>Product image uploading is the next step for the live site. Future improvements may include image storage, email notifications, analytics, inventory alerts, inquiry status updates, and usability testing with potential customers.</p>
    </div></section>
  </div>`;
}
