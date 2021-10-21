import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #f3f9ff;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ItemWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Item = styled.div`
  width: 368px;
  height: 248px;
  background: #ffffff;
  border: 1px solid #dedede;
  padding: 2rem;
  box-sizing: border-box;
  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  & h1 {
    margin: 0;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.1px;
    color: #181949;
  }
  & p {
    margin: 0;
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 18px;
    letter-spacing: 0.1px;
    color: #374754;
  }
`;
const ItemBorder = styled(Item)`
  background: #ffffff;
  border: 2px solid #e6367e;
  box-sizing: border-box;
  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
`;
const ItemActive = styled(Item)`
  background: #e6367e;
  border: 1px solid #dedede;
  box-sizing: border-box;

  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  & > * {
    color: white;
  }
`;
const ItemCost = styled.div`
  width: fit-content;
  margin-top: 30px;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
`;
const Number = styled.h2`
  grid-row-start: 1;
  grid-row-end: 3;
  margin: 0;

  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 65px;

  letter-spacing: 0.2px;
  color: #111111;
  display: flex;
  align-items: center;
  justify-content: end;

  width: fit-content;
`;
const Dollar = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
  letter-spacing: 0.1px;
  color: #252b42;
  display: flex;
  align-items: end;
  justify-content: start;
  margin: 0;
`;
const Month = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: #374754;
  display: flex;
  align-items: start;
  justify-content: start;
  margin: 0;
`;

const MemberShip = () => {
  return (
    <Wrapper>
      <ItemWrapper>
        <Item>
          <h1>Free Test</h1>
          <p>Organize across all apps by hand</p>
          <ItemCost>
            <Number>0</Number>
            <Dollar>$</Dollar>
            <Month>Per Month</Month>
          </ItemCost>
        </Item>
        <Item>
          <h1>Low Price</h1>
          <p>Monthly fixed Amount</p>
          <ItemCost>
            <Number>200.000</Number>
            <Dollar>$</Dollar>
            <Month>Per Month</Month>
          </ItemCost>
        </Item>
        <ItemBorder>
          <h1>Easy Using Methods</h1>
          <p>Various Manuals</p>
          <ItemCost>
            <Number>200.000</Number>
            <Dollar>$</Dollar>
            <Month>Per Month</Month>
          </ItemCost>
        </ItemBorder>
        <ItemActive>
          <h1>Verified IT Service</h1>
          <p>On sale in 4 countries</p>
          <ItemCost>
            <Number>300.000</Number>
            <Dollar>$</Dollar>
            <Month>Per Month</Month>
          </ItemCost>
        </ItemActive>
      </ItemWrapper>
    </Wrapper>
  );
};

export default MemberShip;
