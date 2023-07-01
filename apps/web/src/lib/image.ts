import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import client from '@/lib/client';

const builder = imageUrlBuilder(client);

export function getImageUrl(source: SanityImageSource) {
  return builder.image(source);
}
