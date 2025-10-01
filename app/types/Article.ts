export interface Article {
  landing: {
    title: string;
    description: string;
    links: Array<{
      title: string;
      link: string;
    }>;
  };
}