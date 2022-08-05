import { useContext } from "react";
import { ProductsContext } from "../../context/Products";
import ProductCard from "../ProductCard";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
