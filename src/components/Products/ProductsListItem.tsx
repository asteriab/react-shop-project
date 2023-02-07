import { Button, Card, CardActions, CardContent } from "@mui/material";
import { type } from "os";
import "./ProductListItem.scss";

type Props = {
  title: string;
  description: string;
  type: string;
  capacity: number;
  price: number;
};
const ProductsListItem = (props: Props) => {
  return (
    <Card>
      <CardContent className="product">
        <div className="product-title">{props.title}</div>
        <div className="product-description">This is {props.description}</div>
        <div className="product-features">Type: {props.type}</div>
        <div className="product-features">Capacity: {props.capacity}Gb</div>
        <div className="product-price">${props.price}</div>
      </CardContent>
      <CardActions className="btns-wrap">
        <Button variant="outlined">Add To Cart</Button>
      </CardActions>
    </Card>
  );
};
export default ProductsListItem;
