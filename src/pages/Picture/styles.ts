import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #333;
  width: 100vw;
  height: 100vh;
  color: #fff;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

export const PictureContainer = styled.div`
  margin-top: 20px;
  max-width: 80%;
  max-height: 60%;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const PictureDescription = styled.p`
  margin-top: 20px;
  width: 80%;
  text-align: justify;
  text-indent: 50px;
  font-size: 18px;
`;
