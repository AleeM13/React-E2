import styled from "styled-components";

export const CardContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  margin: 30px auto;
  padding: 30px 25px;
  padding-bottom: 15px;
  border-radius: 20px;
  box-shadow: 10px 10px 25px #ff0090;
  box-shadow: -3px -3px 20px #ff0090;
  font-weight: 600;
`;

export const CardTextContentContainerStyled = styled.div`
  text-align: center;
  & h2 {
    margin: 0;
    font-weight: 700;
    font-size: 35px;
    line-height: 36px;
    color: #fff;
  }
  & h3 {
    margin: 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin-top: 3px;
    color: #fff;
  }
`;

export const CardStatusContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const CardTypeContainerStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  & p {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #fff;
  }
`;