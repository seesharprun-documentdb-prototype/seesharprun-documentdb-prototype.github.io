export interface Link {
  title: string;
  link: string;
  description?: string;
  children?: Link[];
}