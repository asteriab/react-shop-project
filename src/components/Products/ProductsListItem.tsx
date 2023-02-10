import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { Component } from 'react'
import './ProductListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}

class ProductsListItem extends Component<Props> {
    render() {
        return (
            <Card className="product" variant="outlined">
                <CardContent>
                    <div className="product-image">
                        <img src={this.props.image} alt="product-image" />
                    </div>
                    <div className="product-title">{this.props.title}</div>
                    <div className="product-description">
                        This is {this.props.description}
                    </div>
                    <div className="product-features">
                        Type: {this.props.type}
                    </div>
                    <div className="product-features">
                        Capacity: {this.props.capacity}Gb
                    </div>
                    <div className="product-price">${this.props.price}</div>
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
}
// const ProductsListItem = ({
//     title,
//     description,
//     type,
//     capacity,
//     price,
//     image,
// }: Props) => {

// }
export default ProductsListItem
