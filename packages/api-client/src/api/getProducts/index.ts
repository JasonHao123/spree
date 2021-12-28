import type { ApiContext, GetProductsParams, ProductSearchResult } from '../../types';
import { addHostToProductImages, deserializeLimitedVariants } from '../serializers/product';
import { deserializeSearchMetadata } from '../serializers/search';

export default async function getProducts({ client, config }: ApiContext, params: GetProductsParams): Promise<ProductSearchResult> {
  try {
    const url = new URL('/storefront/control/products', config.backendUrl);
    console.log(url.href);
      // Add parameters passed from composable as query strings to the URL
      // params.id && url.searchParams.set('id', params.id);
      // params.catId && url.searchParams.set('catId', params.catId);
      // params.limit && url.searchParams.set('limit', params.limit);

      // Use axios to send a GET request
      const result = await client.get(url.href,{
        params: {
          message: 'hello'
        }
      });

    return result.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
