export const defaultLang = "en" as const;
export const locales = ["en", "id"] as const;
export type Lang = (typeof locales)[number];

export const localeLabels: Record<Lang, string> = {
  en: "EN",
  id: "ID",
};

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.products": "Products",
    "nav.blog": "Writing",
    "hero.title": "Jordan Maulana",
    "hero.role": "Software Engineer & Creator",
    "hero.location": "Gresik, East Java, Indonesia",
    "hero.tagline":
      "8+ years building Flutter apps and full-stack systems. I lead mobile teams, ship indie products, and write about what I learn.",
    "section.products": "What I'm building",
    "section.products.sub": "Side projects that became real products.",
    "section.posts": "Recent writing",
    "section.posts.sub": "Notes from the workbench.",
    "section.posts.all": "All posts →",
    "section.elsewhere": "Find me elsewhere",
    "products.visit": "Visit site →",
    "products.read": "Read more →",
    "blog.empty": "Nothing here yet. Drafts in progress.",
    "blog.published": "Published",
    "blog.updated": "Updated",
    "blog.back": "← All posts",
    "footer.copy": "Built with Astro. Open to good problems.",
    "lang.switchTo": "Bahasa Indonesia",
    "theme.toggle": "Toggle theme",
  },
  id: {
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.products": "Produk",
    "nav.blog": "Tulisan",
    "hero.title": "Jordan Maulana",
    "hero.role": "Software Engineer & Pencipta Produk",
    "hero.location": "Gresik, Jawa Timur, Indonesia",
    "hero.tagline":
      "8+ tahun bangun aplikasi Flutter dan sistem full-stack. Mimpin tim mobile, rilis produk indie, dan nulis hasil belajar di sini.",
    "section.products": "Yang lagi aku bangun",
    "section.products.sub": "Proyek sampingan yang jadi produk beneran.",
    "section.posts": "Tulisan terbaru",
    "section.posts.sub": "Catatan dari bengkel kerja.",
    "section.posts.all": "Semua tulisan →",
    "section.elsewhere": "Cari aku di tempat lain",
    "products.visit": "Kunjungi situs →",
    "products.read": "Baca selengkapnya →",
    "blog.empty": "Belum ada apa-apa. Draf masih jalan.",
    "blog.published": "Tayang",
    "blog.updated": "Diperbarui",
    "blog.back": "← Semua tulisan",
    "footer.copy": "Dibangun dengan Astro. Terbuka untuk masalah seru.",
    "lang.switchTo": "English",
    "theme.toggle": "Ganti tema",
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type TranslationKey = keyof (typeof ui)["en"];
