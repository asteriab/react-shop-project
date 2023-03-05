import { Card, CardContent, Grid } from '@mui/material'
import Button from '@mui/material/Button'
import { Product } from 'utils/ProductsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'

type Props = {
    product: Product
    productCount: number
    deleteProductFromCart: Function
    changeProductQuantity: Function
    minCount: number
}

const CartProductListItemExtended = ({
    product,
    productCount,
    deleteProductFromCart,
    changeProductQuantity,
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
                        onDecrement={() =>
                            productCount > 1
                                ? changeProductQuantity(
                                      product.id,
                                      productCount - 1
                                  )
                                : deleteProductFromCart(product.id)
                        }
                        onIncrement={() =>
                            changeProductQuantity(product.id, productCount + 1)
                        }
                        minCount={0}
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
