import { Product } from 'utils/ProductsArray'

type Props = {
    product: Product
    productCount: number
}

const CartProductListItem = ({ product, productCount }: Props) => {
    return (
        <div>
            {product.title}: {productCount}
        </div>
    )
}

export default CartProductListItem
