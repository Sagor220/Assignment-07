import { Outlet } from "react-router";

import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

const RootLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default RootLayout;
