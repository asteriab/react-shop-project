import { Grid, Typography } from '@mui/material'
import ProductsArray from 'utils/ProductsArray'
import ProductsListItem from './ProductsListItem'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h3"
                component="h2"
                align="center"
                sx={{ marginBottom: '30px' }}
            >
                List of Products
            </Typography>
            <Grid container spacing={4}>
                {ProductsArray.map(
                    ({
                        id,
                        title,
                        description,
                        capacity,
                        type,
                        price,
                        image,
                    }) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={id}>
                                <ProductsListItem
                                    image={image}
                                    title={title}
                                    description={description}
                                    type={type}
                                    capacity={capacity}
                                    price={price}
                                />
                            </Grid>
                        )
                    }
                )}
            </Grid>
        </>
    )
}
export default ProductsList
