import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #f3f9ff;
  height: 30vh;
  border-top: 1px solid rgba(153, 153, 153, 0.46);
`;
const Item = styled.div`
  border: 1px solid rgba(153, 153, 153, 0.46);
`;
const Footer = () => {
  return (
    <Wrapper>
      <Item></Item>
    </Wrapper>
  );
};

export default Footer;
