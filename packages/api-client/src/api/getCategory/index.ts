import { ApiContext, Category, GetCategoryParams } from '../../types';
import { deserializeCategories } from '../serializers/category';


export default async function getCategory({ client,config }: ApiContext, { categorySlug }: GetCategoryParams): Promise<Category> {
  try {
    const url = new URL('/storefront/control/categories', config.backendUrl);
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
      console.log(result.data);
      // Return data from the API
      return result.data.data;

    // if (result.isSuccess()) {
    //   const data = result.success();
    //   const productsData = addHostToProductImages(data, config);
    //
    //   return {
    //     data: deserializeLimitedVariants(productsData),
    //     meta: deserializeSearchMetadata(data.meta, optionTypeFilters, productPropertyFilters)
    //   };
    // } else {
    //   throw result.fail();
    // }
  } catch (e) {
    console.error(e);
    throw e;
  }
}
