export interface Activity {
  id: number;
  name: string;
  location: string;
  imageURL: string;
  price: number;
  discount: number;
  description?: string;
}