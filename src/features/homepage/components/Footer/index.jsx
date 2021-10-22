import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #f3f9ff;
  height: 30vh;
  border-top: 1px solid rgba(153, 153, 153, 0.46);
  display: flex;
  align-content: stretch;
`;
const Item = styled.div`
  border: 1px solid rgba(153, 153, 153, 0.46);
  height: inherit;
  width: 35vw;
`;
const ItemContent = styled.div`
  padding: 2rem 3rem 1rem 16rem;
  & h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 30px;
    letter-spacing: -0.3px;
    color: #181949;
  }
  & p,
  & span {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.204545px;
    color: #666666;
  }
`;
const ItemMiddle = styled(Item)`
  width: 30vw;
`;
const ItemContentMidle = styled(ItemContent)`
  padding: 2rem 3rem 1rem 5rem;
`;
const Footer = () => {
  return (
    <Wrapper>
      <Item>
        <ItemContent>
          <h1>Vietnam Office</h1>
          <p>
            14F, APtower, Dien Bien Phu street, district 3, Ho Chi Minh city
          </p>
          <p>Business resigtration: 0315421202</p>
          <span>Tel: 028-3520-2367</span>
          <span>sales@dkinno.com</span>
          <p>Copyright 2021 DaouKiwoom Innocation C0., Ltd</p>
        </ItemContent>
      </Item>
      <ItemMiddle>
        <ItemContentMidle>
          <h1>Indonesia Office</h1>
          <p>
            Menara Mandiri II, Jl. jend. Sudirman No.54-55, South Jakarta, DKI
            Jakarta 12190, Indonsia
          </p>
          <p>Tel: +62-21-5082-0038</p>
        </ItemContentMidle>
      </ItemMiddle>
      <Item>
        <ItemContentMidle>
          <h1>Korea Office</h1>
          <p>
            5th Fl, C-dong, PDC, 242, Pangyo-ro, Bundang-gu, Seongnam-si,
            Gyeonggi-do, Korea
          </p>
        </ItemContentMidle>
      </Item>
    </Wrapper>
  );
};

export default Footer;
