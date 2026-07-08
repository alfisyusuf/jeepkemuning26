// Documents
import homepage from './documents/homepage'
import siteSettings from './documents/siteSettings'
import paketWisata from './documents/paketWisata'
import artikel from './documents/artikel'
import kategoriArtikel from './documents/kategoriArtikel'
import halaman from './documents/halaman'
import testimoni from './documents/testimoni'

// Objects (reusable)
import seo from './objects/seo'
import faqItem from './objects/faqItem'
import keunggulanItem from './objects/keunggulanItem'
import tierHarga from './objects/tierHarga'
import galeriItem from './objects/galeriItem'

export const schemaTypes = [
  // singletons & collections
  homepage,
  siteSettings,
  paketWisata,
  artikel,
  kategoriArtikel,
  halaman,
  testimoni,
  
  // objects
  seo,
  faqItem,
  keunggulanItem,
  tierHarga,
  galeriItem,
]