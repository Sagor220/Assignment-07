import { Outlet, useNavigation } from "react-router";

import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

const RootLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <Header></Header>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/60 z-50">
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default RootLayout;
