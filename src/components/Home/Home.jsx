import React, { useEffect } from "react";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../Categories/Categories";
import Banner from "../banner/Banner";
import { filterByPrice } from "../../features/slice/productsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { products, categories } = useSelector((state) => state);
  useEffect(() => {
    if (!products.list.lenght) return;
    dispatch(filterByPrice(100));
  }, [dispatch, products.list.lenght]);
  return (
    <>
      <Poster />
      <Products products={products.list} amount={5} title="Trending" />
      <Categories
        products={categories.list}
        amount={5}
        title="Worth seeinh"
      ></Categories>
      <Banner></Banner>
      <Products
        products={products.filtered}
        amount={5}
        title="Less than 100$"
      />
    </>
  );
};

export default Home;
