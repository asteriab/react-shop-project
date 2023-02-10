import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
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
                <div className="product-quantity">
                    <Button variant="outlined">-</Button>
                    <TextField size="small" value={1} />
                    <Button variant="outlined">+</Button>
                </div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button variant="outlined">Add To Cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
