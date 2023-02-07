import { Button, Card, CardActions, CardContent } from "@mui/material";

type Props = {};
const ProductsListItem = (props: Props) => {
  return (
    <Card>
      <CardContent className="product">
        <div className="product-title">iPhone 14Pro</div>
        <div className="product-description">This iPhone 14Pro</div>
        <div className="product-features">Type: Phone</div>
        <div className="product-features">Capacity: 256 Gb</div>
        <div className="product-price">$500</div>
      </CardContent>
      <CardActions>
        <Button variant="outlined">Add To Cart</Button>
      </CardActions>
    </Card>
  );
};
export default ProductsListItem;
