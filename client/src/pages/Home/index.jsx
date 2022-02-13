import Header from "../../components/Header";
import Categories from "../../components/Categories";
import Products from "../../components/Products";
import React from "react";

import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { getCategories } from "../../redux/actions/categoryActions";

const Index = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getProducts(0));
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Categories />
      <Products />
    </>
  );
};

export default Index;
