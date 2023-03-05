import { Button } from '@mui/material'
import ProductsArray, { getProductsObject, Product } from 'utils/ProductsArray'
import CartProductListItem from './CartProductListItem'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
    CartItem?: any
    deleteProductFromCart?: Function
    changeProductQuantity?: Function
}

const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(ProductsArray),
    CartItem = CartProductListItem,
    deleteProductFromCart,
    changeProductQuantity,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).map((id) => (
                <CartItem
                    key={id}
                    product={productsObject[parseInt(id)]}
                    productCount={productsInCart[parseInt(id)]}
                    deleteProductFromCart={deleteProductFromCart}
                    changeProductQuantity={changeProductQuantity}
                />
            ))}
        </>
    )
}

export default CartProductList
