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
  & p {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 44px;
    text-align: center;
    text-transform: uppercase;
    color: #181949;
  }
`;
const ItemContentBottom = styled.div`
  margin: 0;
  width: 50%;
  & p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #666666;
  }
`;
const Button = styled.div`
  margin: 2rem auto;
  width: 20%;
  padding: 8px 16px;
  focus: cursor;
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
          <ItemContentBottom>
            <p>Inventory Management</p>
            <Button>G-Book</Button>
          </ItemContentBottom>
        </ItemContent>
      </Item>
      <BrownItem>
        <Icon>
          <img src={item2} alt="item2" />
        </Icon>
        <ItemContent>
          <p>Accounting</p>
          <ItemContentBottom>
            <p>Accounting</p>
            <Button>G-Book</Button>
          </ItemContentBottom>
        </ItemContent>
      </BrownItem>
      <Item>
        <Icon>
          <img src={item3} alt="item3" />
        </Icon>
        <ItemContent>
          <p>HR & Admin </p>
          <ItemContentBottom>
            <p>Inventory Management</p>
            <Button>G-Book</Button>
            <p>Inventory Management</p>
            <Button>G-Book</Button>
          </ItemContentBottom>
        </ItemContent>
      </Item>
      <BrownItem>
        <Icon>
          <img src={item4} alt="item4" />
        </Icon>
        <ItemContent>
          <p>sales</p>
          <ItemContentBottom>
            <p>Create Homepage Youtube & Instagram</p>
            <Button>Fieldmake</Button>
          </ItemContentBottom>
        </ItemContent>
      </BrownItem>
      <Item>
        <Icon>
          <img src={item5} alt="item5" />
        </Icon>
        <ItemContent>
          <p>customer</p>
          <ItemContentBottom>
            <p>Customer Request Management</p>
            <Button>OQUFIE</Button>
          </ItemContentBottom>
        </ItemContent>
      </Item>
      <BrownItem>
        <Icon>
          <img src={item6} alt="item6" />
        </Icon>
        <ItemContent>
          <p>security</p>
          <ItemContentBottom>
            <p>SSL server</p>
            <Button>SECTIGO</Button>
          </ItemContentBottom>
        </ItemContent>
      </BrownItem>
    </Wrapper>
  );
};

export default Content;
