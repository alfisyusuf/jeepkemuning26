import { sanityClient } from 'sanity:client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient
const builder = imageUrlBuilder(client)

// Kita gunakan 'any' untuk menghindari error deklarasi tipe bawaan package
export function urlFor(source: any) {
  return builder.image(source)
}