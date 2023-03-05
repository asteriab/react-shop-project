import { Grid, Typography } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    deleteProductFromCart: Function
    changeProductQuantity: Function
}

const CartPage = ({
    productsInCart,
    deleteProductFromCart,
    changeProductQuantity,
}: Props) => {
    return (
        <div>
            <Typography variant="h4" component="h1">
                Cart
            </Typography>
            <Grid container spacing={4} sx={{ marginTop: 0 }}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                    deleteProductFromCart={deleteProductFromCart}
                    changeProductQuantity={changeProductQuantity}
                />
            </Grid>

            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartPage
