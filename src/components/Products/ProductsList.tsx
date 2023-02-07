import { Grid, Typography } from "@mui/material";
import ProductsListItem from "./ProductsListItem";

type Props = {};
const ProductsList = (props: Props) => {
  return (
    <>
      <Typography variant="h3" component="h2" align="center">
        List of Products
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <ProductsListItem
            title="iPhone 5"
            description="iPhone 5"
            type="phone"
            capacity={128}
            price={200}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProductsListItem
            title="iPad 9"
            description="iPad 9"
            type="tablet"
            capacity={512}
            price={1200}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProductsListItem
            title="iPhone 14 Pro Max"
            description="iPhone 14 Pro Max"
            type="phone"
            capacity={512}
            price={1850}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default ProductsList;
