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
    return (
        <div>
            {/* <div>
                {Object.keys(productsInCart).map((id) => (
                    <div key={id}>
                        {productsObject[parseInt(id)].title}:{' '}
                        {productsInCart[parseInt(id)]}
                    </div>
                ))}
            </div> */}
            <div>
                Total: ${' '}
                {Object.keys(productsInCart).reduce(
                    (total, id) =>
                        total +
                        productsObject[parseInt(id)].price *
                            productsInCart[parseInt(id)],
                    0
                )}{' '}
            </div>
        </div>
    )
}
export default CartHeader
