export interface Product {
  id: number;
  img: string;
  title: string;
  price: number;
}

export interface CartItem {
  id: number;
  img: string;
  title: string;
  price: number;
  product: Product;
  qty: number;
}
