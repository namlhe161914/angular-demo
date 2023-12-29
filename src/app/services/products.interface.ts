export interface Products {
  _id: string;
  name: string;
  images: string;
  price: string;
  description: string;
  quantity: undefined | number;
}

export interface cart {
  name: string,
  price: number,
  category: string,
  color: string,
  image: string,
  description: string,
  id: number | undefined,
  quantity: undefined | number,
  productId: number,
  userId: number
}

export interface priceSummary{
  price:number,
  discount:number,
  tax:number,
  delivery:number,
  total:number
}