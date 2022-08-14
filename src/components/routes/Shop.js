import CategoriesPreview from "./CategoriesPreview";
import Category from "../Category";
import { Routes, Route } from "react-router-dom";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

// 008 Nested Routes in Shop
