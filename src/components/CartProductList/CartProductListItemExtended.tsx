import { Card, CardContent, Grid } from '@mui/material'
import Button from '@mui/material/Button'
import { Product } from 'utils/ProductsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'

type Props = {
    product: Product
    productCount: number
    deleteProductFromCart: Function
}

const CartProductListItemExtended = ({
    product,
    productCount,
    deleteProductFromCart,
}: Props) => {
    return (
        <Grid item xs={12} sm={4}>
            <Card variant="outlined">
                <CardContent>
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for 1 item: {product.price}</p>
                    <p>Count: {productCount}</p>
                    <Quantity
                        count={productCount}
                        onDecrement={() => console.log('test')}
                        onIncrement={() => console.log('test')}
                    />
                    <Button
                        variant="outlined"
                        onClick={() => deleteProductFromCart(product.id)}
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
