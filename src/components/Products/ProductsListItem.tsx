import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { red } from '@mui/material/colors'
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
    color: string
    show: boolean
}

class ProductsListItem extends Component<Props, State> {
    state = {
        count: 1,
        color: 'green',
        show: false,
    }

    onIncrementClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
    }

    onDecrementClick = (num: number) => {
        this.setState((prevState) => ({
            count: prevState.count - num,
        }))
    }

    changeColor = () => {
        this.setState((prevState) => ({
            color: prevState.color === 'red' ? 'green' : 'red',
        }))
    }

    showText = () => {
        this.setState((prevState) => ({
            show: !prevState.show,
        }))
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

                    <p>
                        Color:
                        <span className={this.state.color}>
                            {this.state.color}
                        </span>
                    </p>
                    <button onClick={this.changeColor}> Change color</button>
                    {this.state.show ? (
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Laboriosam eveniet a officia? Accusantium,
                            recusandae cupiditate nisi quo quia aliquam a
                            temporibus dolorum expedita atque quasi architecto
                            nostrum veniam at doloribus?
                        </p>
                    ) : null}

                    <br />
                    <button onClick={this.showText}>
                        Show Full description
                    </button>

                    <div className="product-price">${price}</div>
                    <div className="product-quantity">
                        <Button
                            variant="outlined"
                            onClick={() => this.onDecrementClick(3)}
                            disabled={this.state.count <= 1}
                        >
                            -
                        </Button>
                        <TextField size="small" value={this.state.count} />
                        <Button
                            variant="outlined"
                            onClick={this.onIncrementClick}
                            disabled={this.state.count >= 10}
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
