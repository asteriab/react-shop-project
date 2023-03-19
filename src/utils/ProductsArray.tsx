export type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
    fullDescription?: string
}

const ProductsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 5',
        description: 'iPhone 5',
        fullDescription: '<div class="red">iPhone 5</div>',
        type: 'phone',
        capacity: 128,
        price: 200,
        image: '/images/iphone_green.jpg',
    },
    {
        id: 2,
        title: 'iPhone 14 Pro Max',
        description: 'iPhone 14 Pro Max',
        type: 'phone',
        capacity: 512,
        price: 1850,
        image: '/images/iphone_purple.jpg',
    },
    {
        id: 3,
        title: 'iPad 9',
        description: 'iPad 9',
        type: 'tablet',
        capacity: 512,
        price: 1200,
        image: '/images/realme_pad.jpg',
    },
    {
        id: 4,
        title: 'iPhone 5',
        description: 'iPhone 5',
        type: 'phone',
        capacity: 128,
        price: 200,
        image: '/images/realme_white.jpg',
    },
    {
        id: 5,
        title: 'iPhone 14 Pro Max',
        description: 'iPhone 14 Pro Max',
        type: 'phone',
        capacity: 512,
        price: 1850,
        image: '/images/samsung_black.jpg',
    },
    {
        id: 6,
        title: 'iPad 96',
        description: 'iPad 9',
        type: 'tablet',
        capacity: 512,
        price: 1200,
        image: '/images/samsung_brown.jpg',
    },
]

export const getProductsObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({ ...object, [product.id]: product }),
        {}
    )

export default ProductsArray
