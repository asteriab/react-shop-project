import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import ProductsArray, { getProductsObject, Product } from 'utils/ProductsArray'
type Props = {
    productsObject?: {
        [id: number]: Product
    }
}

const ProductPage = ({
    productsObject = getProductsObject(ProductsArray),
}: Props) => {
    const { id } = useParams()
    const product = productsObject[parseInt(id!)]
    console.log(product)
    return (
        <>
            <Typography variant="h4" component={'h1'}>
                {product.title}
            </Typography>
            <p
                dangerouslySetInnerHTML={{
                    __html: product.fullDescription!,
                }}
            ></p>
        </>
    )
}

export default ProductPage
