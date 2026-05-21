import { createImageUrlBuilder } from '@sanity/image-url';
import { client } from './client';

const builder = client
  ? createImageUrlBuilder({
      projectId: client.config().projectId || '',
      dataset: client.config().dataset || 'production',
    })
  : null;

export function urlFor(source: any) {
  if (!builder) return null;
  return builder.image(source);
}
