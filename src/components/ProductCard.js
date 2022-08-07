import { useContext } from "react";
import { CartContext } from "../context/Cart";
import Button from "./Button";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <Button onClick={addProductToCart} buttonType="inverted">
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
