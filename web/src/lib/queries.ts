// Fragment yang dipakai berulang
const seoFragment = `seo{metaTitle, metaDescription, ogImage}`
const paketCardFragment = `_id, nama, "slug": slug.current, ringkasanKartu, fotoKartu`
const testimoniFragment = `_id, namaPelanggan, asalInstansi, foto, rating, isiTestimoni, tanggal`

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  namaBisnis, tagline, logo, whatsapp, email, alamat, instagramUrl, instagramHandle, facebookUrl, facebookHandle,
  navMenu[]{
    label, tujuan, urlManual,
    "paketSlug": paketRef->slug.current,
    "halamanSlug": halamanRef->slug.current
  },
  ${seoFragment.replace('seo', 'seoDefault')}
}`

export const homepageQuery = `*[_type == "homepage"][0]{
  heroSlides, heroJudulUtama, heroJudulAksen, heroBadge, heroDeskripsi,
  keunggulanKicker, keunggulanJudulUtama, keunggulanJudulAksen, keunggulanDeskripsi, keunggulanItems,
  "paketDitampilkan": paketDitampilkan[]->{${paketCardFragment}},
  "testimoniDitampilkan": testimoniDitampilkan[]->{${testimoniFragment}},
  galeriHome,
  faq,
  ctaJudul, ctaSubjudul, ctaDeskripsi, ctaFotoPolaroid,
  ${seoFragment}
}`

// Jika testimoniDitampilkan kosong di homepage, gunakan query fallback ini (5 testimoni terbaru bertanda tampilkanDiBeranda)
export const testimoniTerbaruQuery = `*[_type == "testimoni" && tampilkanDiBeranda == true] | order(tanggal desc)[0...6]{
  ${testimoniFragment}
}`

export const semuaPaketSlugQuery = `*[_type == "paketWisata"]{"slug": slug.current}`

export const paketBySlugQuery = `*[_type == "paketWisata" && slug.current == $slug][0]{
  nama, "slug": slug.current, heroKicker, heroSlides, heroDeskripsi, deskripsiLengkap,
  tierHarga, galeri, ${seoFragment}
}`

export const semuaArtikelSlugQuery = `*[_type == "artikel"]{"slug": slug.current}`

export const arsipArtikelQuery = `*[_type == "artikel"] | order(tanggalTerbit desc){
  _id, judul, "slug": slug.current, gambarUtama, ringkasan, tanggalTerbit,
  "kategori": kategori->{nama, "slug": slug.current}
}`

export const semuaKategoriQuery = `*[_type == "kategoriArtikel"]{nama, "slug": slug.current}`

export const artikelBySlugQuery = `*[_type == "artikel" && slug.current == $slug][0]{
  judul, "slug": slug.current, gambarUtama, ringkasan, konten, tags, penulis, tanggalTerbit,
  "kategori": kategori->{nama, "slug": slug.current},
  ${seoFragment},
  "artikelTerkaitManual": artikelTerkait[]->{_id, judul, "slug": slug.current, gambarUtama, ringkasan, tanggalTerbit},
  "artikelTerkaitOtomatis": *[_type == "artikel" && slug.current != ^.slug.current && kategori._ref == ^.kategori._ref][0...3]{
    _id, judul, "slug": slug.current, gambarUtama, ringkasan, tanggalTerbit
  }
}`

export const semuaHalamanSlugQuery = `*[_type == "halaman"]{"slug": slug.current}`

export const halamanBySlugQuery = `*[_type == "halaman" && slug.current == $slug][0]{
  judul, kicker, gambarHero, konten, ${seoFragment}
}`
