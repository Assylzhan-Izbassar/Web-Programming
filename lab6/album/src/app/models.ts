export interface Album {
  userId: number;
  id: number;
  title: string;
}
export interface Product {
  id: number;
}
export interface Cart extends Album {
  products: Product[];
  total: number;
}

export const ALBUMS: Album[] = [
  {
    userId: 1,
    id: 1,
    title: 'Some album'
  }
]
