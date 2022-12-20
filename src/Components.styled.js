import styled from "styled-components";

export const Intro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 70%;
  color: #000000;
  font-size: 22px;
  font-weight: 600;
`;

export const IntroSub = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 70%;
  color: #000000;
  font-size: 16px;
  font-weight: 200;
`;

export const StepOneDisplayCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  gap: 10px;
  width: 80%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const CustomBtn = styled.button`
  width: 120px;
  height: 40px;
  background: transparent;
  border: 1px solid blue;
  color: #000000;
  border-radius: 15px;
  font-size: 16px;
  cursor: pointer;
`;

export const FavoriteNumberSpan = styled.span`
  margin-left: 10px;
  background: red;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

export const CardHolderThirdStep = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;


export const ButtonLight = styled.button`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  background: transparent;
  border: 1px solid #000000;
  border-radius: 12px;
  cursor: pointer;
`
