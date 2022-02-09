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

  function handlePicture(type: string): JSX.Element {
    if (type === "video")
      return (
        <PictureContainer>
          <iframe
            width="420"
            height="315"
            src={pictureData.url}
            title="object video"
          />
        </PictureContainer>
      );
    else if (type === "image")
      return (
        <PictureContainer>
          <img src={pictureData.url} alt="object" />
        </PictureContainer>
      );
    else
      return (
        <PictureContainer>
          <img src={pictureData.url} alt="object" />
        </PictureContainer>
      );
  }

  return (
    <Container>
      <Title>
        {pictureData.title} - {pictureData.date.replace(/-/g, "/")}
      </Title>
      {handlePicture(pictureData.media_type)}
      <PictureDescription>{pictureData.explanation}</PictureDescription>
    </Container>
  );
};
