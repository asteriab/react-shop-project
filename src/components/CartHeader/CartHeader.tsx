import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartHeader = ({
    productsInCart    
}: Props) => {
    return (
            <CartTotal productsInCart={productsInCart}/>
    )
}
export default CartHeader
