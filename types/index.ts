export type CategoryItemType = {
  id: number;
  title: string;
  desc: string;
  image: string;
};

export type CategoriesItemsType = {
  applications: CategoryItemType[];
  illustrations: CategoryItemType[];
  websites: CategoryItemType[];
};

export type PostType = {
  _id: number | string;
  title: string;
  desc: string;
  img: string;
  content: string;
  username: string;
};

export type HeaderItemsType = Array<{
  id: number;
  title: string;
  url: string;
}>;

export type FooterLinksPathsType = {
  src: string;
  url: string;
};

export type PortfolioLinksType = {
  url: string;
  name: string;
};

export type ColumnType = {
  _id: string;
  id: string;
  title: string;
  postIds: [number]
}

export type CategoryType = 'applications' | 'illustrations' | 'websites';
