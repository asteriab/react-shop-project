import { Button, Card, CardActions, CardContent } from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import { useState } from 'react'
import './ProductListItem.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLike } from 'redux/likeReducer'
import { addProductToCart } from 'redux/cartReducer'
import { Link } from 'react-router-dom'

type Props = {
    id: number
    title: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}
const ProductsListItem = ({
    id,
    title,
    description,
    type,
    capacity,
    price,
    image,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrement = () => {
        setCount((prevState) => prevState + 1)
    }

    const onDecrement = () => {
        setCount((prevState) => prevState - 1)
    }
    const isLiked = useAppSelector((state) => state.productsLike[id])
    const dispatch = useAppDispatch()

    return (
        <Card>
            <CardContent className="product">
                <Button
                    variant="outlined"
                    onClick={() => dispatch(toggleLike(id))}
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <div className="product-image">
                    <img src={image} alt="product-image" />
                </div>
                <div className="product-title">
                    <Link to={`/products/${id}`}>{title}</Link>
                </div>
                <div className="product-description">This is {description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity}Gb</div>
                <div className="product-price">${price}</div>

                <Quantity
                    count={count}
                    onDecrement={onDecrement}
                    onIncrement={onIncrement}
                    minCount={1}
                />
            </CardContent>
            <CardActions className="btns-wrap">
                <Button
                    onClick={() => dispatch(addProductToCart({ count, id }))}
                    variant="outlined"
                >
                    Add To Cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem
