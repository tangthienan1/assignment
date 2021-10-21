import React from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import bannerRight from "../../../../assets/rightbanner.png";
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  height: 100vh;
  position: relative;
`;
const LeftText = styled.p`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 56px;

  line-height: 76px;
  letter-spacing: 0.01em;
  color: #181949;

  width: 60%;
  height: 300px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
`;
const Right = styled.div`
  flex: 2;
  position: relative;

  background-image: url(${bannerRight});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  height: 100vh;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`;
const InfoBar = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 36px;
  width: 100%;

  background-color: #181949;
  color: white;
`;
const InfoItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;

  margin-right: 10rem;
`;
const InfoItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  height: 50vh;
  width: 50%;
`;
const Up = styled.div`
  height: 4rem;
  flex: 1;
  text-align: center;
`;
const Button = styled.span`
  padding: 0 2rem 1rem;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  color: #ffffff;
  opacity: 0.5;
`;
const ActiveButton = styled(Button)`
  border-bottom: 1px solid #ffd1e8;
  opacity: 1;
`;
const Down = styled.div`
  display: flex;
  flex-direction: space-between;
  justify-content: center;
  align-items: start;
`;
const DownItem = styled.div`
  flex: 1;
  color: white;
`;
const DownNum = styled.p`
  font-weight: bold;
  font-size: 64px;
  line-height: 0px;
  text-align: center;
`;
const DownText = styled.p`
  font-family: Noto Sans;
  width: 50%;
  margin: 0 auto;
  font-weight: normal;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
`;
const Banner = () => {
  return (
    <Wrapper>
      <Left>
        <LeftText>Asia IT Market Place</LeftText>
      </Left>
      <Right>
        <Info>
          <InfoBar>
            <InfoItemWrapper>
              <InfoItem>
                EN
                <ArrowDropDownIcon />
              </InfoItem>
              <InfoItem>
                Company
                <ArrowDropDownIcon />
              </InfoItem>
              <InfoItem>
                Partner Market Place
                <ArrowDropDownIcon />
              </InfoItem>
            </InfoItemWrapper>
          </InfoBar>
        </Info>
        <RightWrapper>
          <Up>
            <ActiveButton>Now</ActiveButton>
            <Button>Future</Button>
          </Up>
          <Down>
            <DownItem>
              <DownNum>6</DownNum>
              <DownText>different IT Software Networks</DownText>
            </DownItem>
            <DownItem>
              <DownNum>32</DownNum>
              <DownText>partners</DownText>
            </DownItem>
            <DownItem>
              <DownNum>4</DownNum>
              <DownText>countries</DownText>
            </DownItem>
          </Down>
        </RightWrapper>
      </Right>
    </Wrapper>
  );
};

export default Banner;
