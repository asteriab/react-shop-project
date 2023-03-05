import { Typography } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }

    deleteProductFromCart: (id: number) => void
}

const CartPage = ({ productsInCart, deleteProductFromCart }: Props) => {
    return (
        <div>
            <Typography variant="h4" component="h1">
                Cart
            </Typography>
            <CartProductList
                productsInCart={productsInCart}
                deleteProductFromCart={deleteProductFromCart}
            />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartPage
