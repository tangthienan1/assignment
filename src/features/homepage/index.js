import React from "react";
import Header from "./components/Header";
import styled from "styled-components";
import Banner from "./components/Banner";
import Warn from "./components/Warn";
import Content from "./components/Content";
import MemberShip from "./components/MemberShip";
import Footer from "./components/Footer";

const Wrapper = styled.div`
  background-color: white;
  position: relative;
  scroll-behavior: smooth;
`;
const Homepage = () => {
  return (
    <Wrapper>
      <Header />
      <Banner />
      <Warn />
      <Content />
      <MemberShip />
      <Footer />
    </Wrapper>
  );
};
export default Homepage;
