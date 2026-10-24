import products, { extraCards } from "./products.js";

const SITE = "https://www.hillsmacrepair.com.au";
const strip = (s) => String(s).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

const areas = ["Hills District", "Castle Hill", "Baulkham Hills", "Kellyville", "Rouse Hill", "Bella Vista", "Norwest", "Cherrybrook", "Dural", "Pennant Hills", "Sydney"];

const provider = {
  "@type": "LocalBusiness",
  "@id": SITE + "/#business",
  name: "Hills Mac Repair",
  url: SITE + "/",
  telephone: "+61 2 4509 9248",
  email: "info@hillsmacrepair.com.au",
  image: SITE + "/assets/img/logo.webp",
  logo: SITE + "/assets/img/logo.webp",
  priceRange: "$$",
  areaServed: areas.map((n) => ({ "@type": "Place", name: n + ", NSW" }))
};

function schemaFor(p) {
  const url = `${SITE}/product/${p.slug}/`;
  const graph = [
    {
      "@type": "Service",
      "@id": url + "#service",
      name: p.h1,
      serviceType: p.name,
      description: p.description,
      url,
      provider,
      areaServed: provider.areaServed,
      offers: {
        "@type": "Offer",
        url,
        priceCurrency: "AUD",
        price: String(p.price),
        priceSpecification: { "@type": "PriceSpecification", minPrice: p.price, priceCurrency: "AUD" }
      }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
        { "@type": "ListItem", position: 2, name: "Repairs", item: SITE + "/shop/" },
        { "@type": "ListItem", position: 3, name: p.name, item: url }
      ]
    }
  ];
  if (p.faqs && p.faqs.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: p.faqs.map(([q, a]) => ({ "@type": "Question", name: strip(q), acceptedAnswer: { "@type": "Answer", text: strip(a) } }))
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

const bySlug = {};
for (const p of products) bySlug[p.slug] = p;

const all = products.map((p) => ({
  ...p,
  url: `/product/${p.slug}/`,
  relatedItems: (p.related || []).map((s) => ({ ...bySlug[s], url: `/product/${s}/` })).filter((x) => x.slug),
  schema: schemaFor(p)
}));

const cards = [...all, ...extraCards];

const shopSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      name: "Mac repair prices, Hills District",
      itemListElement: cards.map((c, i) => ({ "@type": "ListItem", position: i + 1, url: SITE + c.url, name: c.name }))
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
        { "@type": "ListItem", position: 2, name: "Repairs", item: SITE + "/shop/" }
      ]
    }
  ]
};

export default {
  all,
  cards,
  standard: all.filter((p) => !p.custom),
  bySlug: Object.fromEntries(all.map((p) => [p.slug, p])),
  provider,
  shopSchema
};
