import { Card, CardContent, Grid } from '@mui/material'
import Button from '@mui/material/Button'
import { Product } from 'utils/ProductsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLike } from 'redux/likeReducer'

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
    const isLiked = useAppSelector((state) => state.productsLike[product.id])
    const dispatch = useAppDispatch()

    return (
        <Grid item xs={12} sm={4}>
            <Card variant="outlined">
                <CardContent>
                    <Button
                        variant="outlined"
                        onClick={() => dispatch(toggleLike(product.id))}
                    >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
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
                                ? dispatch({
                                      type: 'CHANGE_PRODUCT_QUANTITY',
                                      id: product.id,
                                      count: productCount - 1,
                                  })
                                : dispatch({
                                      type: 'DELETE_PRODUCT_FROM_CART',
                                      id: product.id,
                                  })
                        }
                        onIncrement={() =>
                            dispatch({
                                type: 'CHANGE_PRODUCT_QUANTITY',
                                id: product.id,
                                count: productCount + 1,
                            })
                        }
                        minCount={0}
                    />
                    <Button
                        variant="outlined"
                        onClick={() =>
                            dispatch({
                                type: 'DELETE_PRODUCT_FROM_CART',
                                id: product.id,
                            })
                        }
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
