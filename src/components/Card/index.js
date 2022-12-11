import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100px;
  height: 150px;
  background: white;
  display: flex;
  box-shadow: 1px 3px #888888;
  border-radius: 10px;
  cursor: pointer;
`;

const CardTextWithSymbol = styled.div`
  color: ${(props) => (props.color ? props?.color : "blue")};
`;

const TopLeft = styled.div`
  top: 5px;
  left: 5px;
  font-size: 16px;
`;

const SmallHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5px;
`;

const SmallHolderBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px 5px;
`;

const IWLogo = styled.img`
    height: 20px;
    padding: 20px;
    margin-top: 10px;
}
`;

const Card = ({ textWithSymbol }) => {
  const number = textWithSymbol && textWithSymbol.split("&");
  const isDiam = number[1] && number[1].includes("diams") ? <>◆</> : null;
  const isSpades = number[1] && number[1].includes("spades") ? <>♠</> : null;
  const isHeart = number[1] && number[1].includes("hearts") ? <>♥</> : null;
  const isClubs = number[1] && number[1].includes("clubs") ? <>♣</> : null;

  return (
    <CardContainer>
      <CardTextWithSymbol
        color={
          (textWithSymbol && textWithSymbol.includes("spades")) ||
          textWithSymbol.includes("clubs")
            ? "black"
            : "red"
        }
      >
        <SmallHolder>
          <TopLeft>
            {number[0]}
            {isDiam}
            {isSpades}
            {isHeart}
            {isClubs}
          </TopLeft>
          <TopLeft>
            {number[0]}
            {isDiam}
            {isSpades}
            {isHeart}
            {isClubs}
          </TopLeft>
        </SmallHolder>
        <IWLogo
          src="https://iwconnect.com/wp-content/uploads/2022/05/01_⋮IW-CONNECT-TM_-Long-LOGO_Light-background.png"
          alt="logo"
        />
        <SmallHolderBottom>
          {" "}
          <TopLeft>
            {number[0]}
            {isDiam}
            {isSpades}
            {isHeart}
            {isClubs}
          </TopLeft>
          <TopLeft>
            {number[0]}
            {isDiam}
            {isSpades}
            {isHeart}
            {isClubs}
          </TopLeft>
        </SmallHolderBottom>
      </CardTextWithSymbol>
    </CardContainer>
  );
};

export default Card;
