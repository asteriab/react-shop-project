export type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: number
    price: number
}

const ProductsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 5',
        description: 'iPhone 5',
        type: 'phone',
        capacity: 128,
        price: 200,
    },
    {
        id: 2,
        title: 'iPhone 14 Pro Max',
        description: 'iPhone 14 Pro Max',
        type: 'phone',
        capacity: 512,
        price: 1850,
    },
    {
        id: 3,
        title: 'iPad 9',
        description: 'iPad 9',
        type: 'tablet',
        capacity: 512,
        price: 1200,
    },
    {
        id: 4,
        title: 'iPhone 5',
        description: 'iPhone 5',
        type: 'phone',
        capacity: 128,
        price: 200,
    },
    {
        id: 5,
        title: 'iPhone 14 Pro Max',
        description: 'iPhone 14 Pro Max',
        type: 'phone',
        capacity: 512,
        price: 1850,
    },
    {
        id: 6,
        title: 'iPad 96',
        description: 'iPad 9',
        type: 'tablet',
        capacity: 512,
        price: 1200,
    },
]

export default ProductsArray
