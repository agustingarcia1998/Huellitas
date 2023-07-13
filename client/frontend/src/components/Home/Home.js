import React from "react";
import { Div } from "./Styled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBarR from "../SideBarR/SideBarR";
import NavBar from "../NavBar/NavBar";
import Lists from "../Lists/Lists";

const Home = () => {
  return (
    <Div>
      <Header />
      <NavBar />
      <SideBarR />
      <Lists />
      <Footer />
    </Div>
  );
};

export default Home;
