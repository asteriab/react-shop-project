import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import ProductsArray, { getProductsObject, Product } from 'utils/ProductsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
    deleteProductFromCart: (id: number) => void
}

const CartPage = ({
    productsInCart,
    productsObject = getProductsObject(ProductsArray),
    deleteProductFromCart,
}: Props) => {
    return (
        <div>
            <div>
                <Typography variant="h4" component="h1">
                    Cart
                </Typography>
            </div>
            <div>
                {Object.keys(productsInCart).map((id) => (
                    <div key={id}>
                        {productsObject[parseInt(id)].title}:{' '}
                        {productsInCart[parseInt(id)]}
                        Price: {productsObject[parseInt(id)].price}{' '}
                        <Button
                            variant="outlined"
                            onClick={() => deleteProductFromCart(parseInt(id))}
                        >
                            X
                        </Button>
                    </div>
                ))}
            </div>
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

export default CartPage
