import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../features/slice/apiSlice";
import { ROUTES } from "../../utils/routes";
import Product from "./Products";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });
  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isLoading, isFetching, isSuccess]);
  return (
    <>
      !data?(<section>Loading...</section>):(<Product {...data}></Product>)
    </>
  );
};

export default SingleProduct;
