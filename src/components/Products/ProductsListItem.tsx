import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { count } from 'console'
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

type State = {
    count: number
}

class ProductsListItem extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            count: 1,
        }
        this.onIncrementClick = this.onIncrementClick.bind(this)
    }

    onIncrementClick() {
        this.setState({
            count: 2,
        })
    }

    render() {
        const { title, description, type, capacity, price, image } = this.props
        return (
            <Card className="product" variant="outlined">
                <CardContent>
                    <div className="product-image">
                        <img src={image} alt="product-image" />
                    </div>
                    <div className="product-title">{title}</div>
                    <div className="product-description">
                        This is {description}
                    </div>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">
                        Capacity: {capacity}Gb
                    </div>
                    <div className="product-price">${price}</div>
                    <div className="product-quantity">
                        <Button variant="outlined">-</Button>
                        <TextField size="small" value={this.state.count} />
                        <Button
                            variant="outlined"
                            onClick={this.onIncrementClick}
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
}
export default ProductsListItem
