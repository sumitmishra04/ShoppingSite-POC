export interface Product {
    id: number | string;
    name: string;
    price: number;
    imageUrl: string;
    description: string | string[];
    tagline: string;
    planLink: string;
    gift: Gift;
}
export interface Gift {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}