export interface Product {
  _id: string;
  title: string;
  colors: Array<string>;
  stock: number;
  images: Array<string>;
  description?: string;
  price: number;
  onSale: boolean;
}
