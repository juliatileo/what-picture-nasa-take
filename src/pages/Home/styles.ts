import styled from "styled-components";

export const Container = styled.div`
  background-color: #333;
  height: 100vh;
  width: 100vw;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const Cake = styled.span`
  font-size: 25px;
  font-weight: 400;
`;

export const Subtitle = styled.p`
  font-weight: 500;
`;

export const ConfirmButton = styled.button`
  margin-top: 30px;
  background-color: #09a129;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.2);
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;
