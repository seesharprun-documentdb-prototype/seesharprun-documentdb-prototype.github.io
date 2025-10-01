export interface Post {
  title: string;
  category: string;
  description: string;
  tags: string[];
  featured?: boolean;
  uri: string;
}