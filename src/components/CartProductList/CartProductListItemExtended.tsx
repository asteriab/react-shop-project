import { Card, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/ProductsArray'

type Props = {
    product: Product
    productCount: number
}

const CartProductListItemExtended = ({ product, productCount }: Props) => {
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
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended