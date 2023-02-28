import ProductsArray, { getProductsObject, Product } from 'utils/ProductsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(ProductsArray),
}: Props) => {
    console.log(productsObject)
    console.log(productsInCart)

    return (
        <div>
            {Object.keys(productsInCart).map((id) => (
                <div key={id}>
                    {productsObject[parseInt(id)].title}:{' '}
                    {productsInCart[parseInt(id)]}
                </div>
            ))}
        </div>
    )
}
export default CartHeader
