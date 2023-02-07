import { Typography } from "@mui/material";
import ProductsListItem from "./ProductsListItem";

type Props = {};
const ProductsList = (props: Props) => {
  return (
    <>
      <Typography variant="h3" component="h2" align="center">
        List of Products
      </Typography>
      <ProductsListItem></ProductsListItem>
    </>
  );
};
export default ProductsList;
