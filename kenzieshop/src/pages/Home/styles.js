import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.div`
  width: 100vw;
  height: 10vh;
`;

export const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  height: 90%;
  padding-top: 40px;
`;

export const Card = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 190px;
  height: 250px;
  margin: 20px 40px;
  border-radius: 10px;

  img {
    width: 160px;
    height: 160px;
    margin-top: 10px;
    border-radius: 10px;
  }

  span {
    text-align: center;
    color: white;
    width: 180px;
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  background: gray;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  height: 40px;
  border: 2px solid gray;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  :hover {
    border-color: green;
  }
`;
