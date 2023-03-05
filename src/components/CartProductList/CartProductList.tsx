import { Button } from "@mui/material"
import ProductsArray, { getProductsObject, Product } from "utils/ProductsArray"

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
    deleteProductFromCart: (id: number) => void
}

const CartProductList = ({productsInCart,
    productsObject = getProductsObject(ProductsArray),
    deleteProductFromCart,}: Props) => {
  return (
    <div>
    {Object.keys(productsInCart).map((id) => (
        <div key={id}>
            {productsObject[parseInt(id)].title}:{' '}
            {productsInCart[parseInt(id)]}
            Price: {productsObject[parseInt(id)].price}{' '}
            <Button
                variant="outlined"
                onClick={() => deleteProductFromCart(parseInt(id))}
            >
                X
            </Button>
        </div>
    ))}
</div>
  )
}

export default CartProductList