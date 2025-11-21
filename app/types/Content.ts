export type Content = {
    type: string;
    description?: string;
    categories: {
        category: string;
        description?: string;
    }[];
}[];