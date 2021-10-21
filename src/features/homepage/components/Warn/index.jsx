import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ffd1e8;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;

  width: 100%;
  height: 10vh;
`;
const Warn = () => {
  return (
    <Wrapper>
      You are now viewing an &nbsp;<strong> IT Software&nbsp;</strong>that has
      been verified by&nbsp;<strong> over 1 million users.</strong>
    </Wrapper>
  );
};

export default Warn;
