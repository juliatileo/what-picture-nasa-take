import { useLocation } from "react-router-dom";

import { PictureData } from "../Home/types";

import {
  Container,
  Title,
  PictureContainer,
  PictureDescription,
} from "./styles";

export const Picture: React.FC = (): JSX.Element => {
  const location = useLocation();
  const { picture_data: pictureData } = location.state as {
    picture_data: PictureData;
  };

  return (
    <Container>
      <Title>
        {pictureData.title} - {pictureData.date}
      </Title>
      <PictureContainer>
        <img src={pictureData.url} alt="object" />
      </PictureContainer>
      <PictureDescription>{pictureData.explanation}</PictureDescription>
    </Container>
  );
};
