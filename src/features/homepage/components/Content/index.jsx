import React from "react";
import styled from "styled-components";
import item1 from "../../../../assets/item1.png";
import item2 from "../../../../assets/item2.png";
import item3 from "../../../../assets/item3.png";
import item4 from "../../../../assets/item4.png";
import item5 from "../../../../assets/item5.png";
import item6 from "../../../../assets/item6.png";

const Wrapper = styled.div`
  background-color: white;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 48px;
  display: flex;
  align-items: end;
  justify-content: center;
  letter-spacing: 0.01em;

  width: 100%;
  height: 25vh;
`;
const Item = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & div {
    flex: 1;
  }
`;
const BrownItem = styled(Item)`
  background: #f4f4f4;
  flex-direction: row-reverse;
  & div:nth-child(2) {
    margin-right: -24rem;
  }
`;
const Icon = styled.div`
  position: relative;
  & img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const ItemContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  & > * {
    margin: 1rem;
  }
  & p:first-child {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 44px;
    text-align: center;
    text-transform: uppercase;
    color: #181949;
  }
  & p:last-of-type {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #666666;
  }
`;
const Button = styled.div`
  margin: 1rem auto;
  width: 10%;
  padding: 8px 16px;

  background: #181949;
  border-radius: 8px;
  color: white;
`;

const Content = () => {
  return (
    <Wrapper>
      <Title>IT CLOUD SEA’S IT SERVICE</Title>
      <Item>
        <Icon>
          <img src={item1} alt="item1" />
        </Icon>
        <ItemContent>
          <p>ASSETS</p>
          <p>Inventory Management</p>
          <Button>G-Book</Button>
        </ItemContent>
      </Item>
      <BrownItem>
        <Icon>
          <img src={item2} alt="item2" />
        </Icon>
        <ItemContent>
          <p>Accounting</p>
          <p>Accounting</p>
          <Button>G-Book</Button>
        </ItemContent>
      </BrownItem>
      <Item>
        <Icon>
          <img src={item3} alt="item3" />
        </Icon>
        <ItemContent>
          <p>HR & Admin</p>
          <p>Create Homepage Youtube & Instagramt</p>
          <Button>Fieldmake</Button>
        </ItemContent>
      </Item>
      <BrownItem>
        <Icon>
          <img src={item4} alt="item4" />
        </Icon>
        <ItemContent>
          <p>sales</p>
          <p>Create Homepage Youtube & Instagramt</p>
          <Button>Fieldmake</Button>
        </ItemContent>
      </BrownItem>
      <Item>
        <Icon>
          <img src={item1} alt="item1" />
        </Icon>
        <ItemContent>
          <p>ASSETS</p>
          <p>Inventory Management</p>
          <Button>G-Book</Button>
        </ItemContent>
      </Item>
      <BrownItem>
        <Icon>
          <img src={item2} alt="item2" />
        </Icon>
        <ItemContent>
          <p>Accounting</p>
          <p>Accounting</p>
          <Button>G-Book</Button>
        </ItemContent>
      </BrownItem>
    </Wrapper>
  );
};

export default Content;
