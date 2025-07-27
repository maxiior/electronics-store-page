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
  order: number;
  guarantee: number;
  category?: string;
  urlInstruction: string;
  vat: number;
  weight: number;
}

export interface CartItem {
  id: number;
  quantity: number;
}
