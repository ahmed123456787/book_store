import React from "react";
import Banner from "./Banner";
import TopSellers from "./TopSellers";
import Recomended from "./Recomended";
import News from "./News";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <TopSellers />
      <Recomended />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
