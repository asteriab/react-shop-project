export type Product = {
  title: string;
  description: string;
  type: string;
  capacity: number;
  price: number;
};

const ProductsArray: Product[] = [
  {
    title: "iPhone 5",
    description: "iPhone 5",
    type: "phone",
    capacity: 128,
    price: 200,
  },
  {
    title: "iPhone 14 Pro Max",
    description: "iPhone 14 Pro Max",
    type: "phone",
    capacity: 512,
    price: 1850,
  },
  {
    title: "iPad 9",
    description: "iPad 9",
    type: "tablet",
    capacity: 512,
    price: 1200,
  },
  {
    title: "iPhone 5",
    description: "iPhone 5",
    type: "phone",
    capacity: 128,
    price: 200,
  },
  {
    title: "iPhone 14 Pro Max",
    description: "iPhone 14 Pro Max",
    type: "phone",
    capacity: 512,
    price: 1850,
  },
  {
    title: "iPad 96",
    description: "iPad 9",
    type: "tablet",
    capacity: 512,
    price: 1200,
  },
];

export default ProductsArray;
