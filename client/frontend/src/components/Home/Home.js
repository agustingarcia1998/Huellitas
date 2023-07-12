import React from "react";
import { Div } from "./Styled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBarR from "../SideBarR/SideBarR";
import NavBar from "../NavBar/NavBar";
import Lists from "../Lists/Lists";
import FormCreate from "../FormCreate/FormCreate";

const Home = () => {
  return (
    <Div>
      {/* <FormCreate/> */}
      <Header />
      <NavBar />
      <SideBarR />
      <Lists />
      <Footer />
    </Div>
  );
};

export default Home;
