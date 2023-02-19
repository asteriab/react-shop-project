import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { useState } from 'react'
import './ProductListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}
const ProductsListItem = ({
    title,
    description,
    type,
    capacity,
    price,
    image,
}: Props) => {
    const [count, setCount] = useState<number>(1)
    const [color, setColor] = useState<string>('green')

    const onIncrement = (num: number) => {
        setCount((prevState) => prevState + num)
    }

    const onDecrement = (num: number) => {
        setCount((prevState) => prevState - num)
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

                <div>
                    Color:
                    <span className={color}> {color}</span>
                </div>
                <button
                    onClick={() =>
                        setColor((prevState) =>
                            prevState === 'green' ? 'red' : 'green'
                        )
                    }
                >
                    Change Color
                </button>

                <div className="product-quantity">
                    <Button
                        variant="outlined"
                        onClick={() => onDecrement(3)}
                        disabled={count <= 1}
                    >
                        -
                    </Button>
                    <TextField size="small" value={count} />
                    <Button
                        variant="outlined"
                        onClick={() => onIncrement(3)}
                        disabled={count >= 10}
                    >
                        +
                    </Button>
                </div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button variant="outlined">Add To Cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
