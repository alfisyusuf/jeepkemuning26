import { sanityClient } from 'sanity:client'
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = sanityClient
const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}