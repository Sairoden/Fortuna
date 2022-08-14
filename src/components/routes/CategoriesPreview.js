import React, { useContext } from "react";
import { CategoriesContext } from "../../context/Categories";
import CategoryPreview from "../CategoryPreview";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;

// 008 Nested Routes in Shop
