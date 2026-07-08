import type {StructureResolver} from 'sanity/structure'

export const SINGLETON_TYPES = new Set(['homepage', 'siteSettings'])

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Konten Jeep Kemuning')
    .items([
      // --- SINGLETON (Hanya 1 Dokumen) ---
      S.listItem()
        .title('Beranda')
        .child(S.document().schemaType('homepage').documentId('homepage')),

      S.listItem()
        .title('Pengaturan Website')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),

      S.divider(),

      // --- COLLECTIONS (Bisa banyak dokumen) ---
      S.listItem()
        .title('Paket Wisata')
        .child(S.documentTypeList('paketWisata').title('Paket Wisata')),

      S.listItem()
        .title('Artikel')
        .child(S.documentTypeList('artikel').title('Artikel')),

      S.listItem()
        .title('Kategori Artikel')
        .child(S.documentTypeList('kategoriArtikel').title('Kategori Artikel')),

      S.listItem()
        .title('Testimoni')
        .child(S.documentTypeList('testimoni').title('Testimoni')),

      S.listItem()
        .title('Halaman Lainnya')
        .child(S.documentTypeList('halaman').title('Halaman Lainnya (Tentang, Syarat, dll)')),
    ])