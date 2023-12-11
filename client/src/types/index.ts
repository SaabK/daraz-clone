export interface Product {
  title: string;
  image: string;
  price: {
    old: number;
    current: number;
  };
  ratings: number;
  comments: string;
}
