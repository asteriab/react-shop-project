import { Grid, Typography } from "@mui/material";
import ProductsArray from "utils/ProductsArray";
import ProductsListItem from "./ProductsListItem";

type Props = {};

const ProductsList = (props: Props) => {
  return (
    <>
      <Typography variant="h3" component="h2" align="center">
        List of Products
      </Typography>
      <Grid container spacing={4}>
        {ProductsArray.map(function (product) {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <ProductsListItem
                title={product.title}
                description={product.description}
                type={product.type}
                capacity={product.capacity}
                price={product.price}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default ProductsList;
