export interface ItemInterface {
  id: number;
  title: string;
  preTitle?: string;
  quickDescription: string;
  fullDescription?: string;
  price: number;
  urlBuyNow: string;
  bestseller?: boolean;
  mainImage: {
    url: string;
  };
}
