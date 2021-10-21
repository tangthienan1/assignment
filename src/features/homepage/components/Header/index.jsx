import React from "react";
import styled from "styled-components";
import logo from "../../../../assets/logo.png";
import home from "../../../../assets/home.svg";
const Wrapper = styled.div`
  z-index: 1;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100vw;
  position: absolute;
`;
const Logo = styled.div`
  flex: 1;
  text-align: center;
`;
const NavBar = styled.div`
  flex: 4;
  & ul {
    padding-right: 8rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    font-weight: 400;
    color: white;
  }
  & ul .active {
    color: #181949;
    font-weight: 700;
  }
  & ul li img {
    vertical-align: middle;
    margin-right: 1rem;
  }
`;
const Header = () => {
  return (
    <Wrapper>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <NavBar>
        <ul>
          <li className="active">
            <img src={home} alt="home" />
            Home
          </li>
          <li>Auto Homepage</li>
          <li>Sales</li>
          <li>CRM</li>
          <li>Electronic office </li>
          <li>Cloud ERP</li>
          <li>SSl</li>
        </ul>
      </NavBar>
    </Wrapper>
  );
};

export default Header;
