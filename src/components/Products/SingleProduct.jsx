import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../features/slice/apiSlice";
import { ROUTES } from "../../utils/routes";
import Product from "./Products";
import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedProduct } from "../../features/slice/productsSlice";

const SingleProduct = () => {
  const dispatch = useDispatch;
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });
  const { list, related } = useSelector(({ products }) => products);
  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isLoading, isFetching, isSuccess]);
  useEffect(() => {
    if (!data || !list.length) return;

    dispatch(getRelatedProduct(data.category.id));
  }, [data, dispatch, list.length]);
  return (
    <>
      !data?(<section>Loading...</section>):(
      <>
        <Product {...data}></Product>
        <Products products={related} amount={10} title="Related"></Products>
      </>
      )
    </>
  );
};

export default SingleProduct;
