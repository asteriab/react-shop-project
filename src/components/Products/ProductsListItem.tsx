import { Button, Card, CardActions, CardContent } from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import { useState } from 'react'
import './ProductListItem.scss'

type Props = {
    id: number
    title: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
    addProductToCart: (count: number, price: number) => void
}
const ProductsListItem = ({
    id,
    title,
    description,
    type,
    capacity,
    price,
    image,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrement = () => {
        setCount((prevState) => prevState + 1)
    }

    const onDecrement = () => {
        setCount((prevState) => prevState - 1)
    }

    return (
        <Card>
            <CardContent className="product">
                <div className="product-image">
                    <img src={image} alt="product-image" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-description">This is {description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity}Gb</div>
                <div className="product-price">${price}</div>

                <Quantity
                    count={count}
                    onDecrement={onDecrement}
                    onIncrement={onIncrement}
                />
            </CardContent>
            <CardActions className="btns-wrap">
                <Button
                    onClick={() => addProductToCart(id, count)}
                    variant="outlined"
                >
                    Add To Cart
                </Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
