import { CategoryGetters, AgnosticCategoryTree, AgnosticBreadcrumb } from '@vue-storefront/core';
import { Category } from '@vue-storefront/spree-api/src/types';

export const getCategoryTree = (categories: any): AgnosticCategoryTree => {
  console.log("categories");
  console.log(categories);
  console.log("-------");

  return categories;
};

export const getCategoryBreadcrumbs = (category: Category): AgnosticBreadcrumb[] => {

  return category.breadcrumbs;
};

const categoryGetters: CategoryGetters<Category> = {
  getTree: getCategoryTree,
  getBreadcrumbs: getCategoryBreadcrumbs
};

export default categoryGetters;
