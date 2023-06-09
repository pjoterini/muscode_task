export const mockProducts = [
  {
    id: 0,
    title: 'iPhone 6s Plus 16GB',
    promoPrice: 649,
    price: 1000,
    currency: '$',
  },
  {
    id: 1,
    title: 'iPad Pro 32GB',
    promoPrice: 600,
    price: 800,
    currency: '$',
  },
  {
    id: 2,
    title: 'MacBook Pro',
    promoPrice: null,
    price: 8000,
    currency: 'PLN',
  },
];

export interface IProduct {
  id: number;
  title: string;
  promoPrice: number | null;
  price: number;
  currency: string;
}
