export type Category = {
  id: number;
  label: string;
  isCurrent: boolean;
  items?: Category[];
  breadcrumbs?: Breadcrumb[];
};

// export type CategorySearchResult = {
//   root: Category;
//   current: Category;
// };
export type Breadcrumb = {
  text: string,
  link: string,
}

export type GetCategoryParams = {
  categorySlug: string;
};
