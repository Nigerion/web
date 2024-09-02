import React, { useEffect } from "react";
import AppRoutes from "../Routes/routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { getCategories } from "../../features/slice/cateoriesSlice";
import { getProducts } from "../../features/slice/productsSlice";
const App = () => {
  const dispanch = useDispatch();
  useEffect(() => {
    dispanch(getCategories());
    dispanch(getProducts());
  }, [dispanch]);
  return (
    <div className="app">
      <Header></Header>
      <div className="container">
        <Sidebar></Sidebar>
        <AppRoutes></AppRoutes>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
