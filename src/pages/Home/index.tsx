import { useEffect, useState } from "react";

import { format, addDays } from "date-fns";
import { Link } from "react-router-dom";

import { api } from "../../utils/api";

import { DatePicker } from "../../components/DatePicker";

import {
  Container,
  TitleContainer,
  Heading,
  Cake,
  Subtitle,
  ConfirmButton,
} from "./styles";
import { PictureData } from "./types";

export const Home: React.FC = (): JSX.Element => {
  const [date, setDate] = useState<string>(format(new Date(), "yyyy-MM-dd"));
  const [pictureData, setPictureData] = useState<PictureData>();

  useEffect(() => {
    (async () => {
      await api({
        method: "GET",
        url: "/",
        params: { date },
      }).then((res) => setPictureData(res.data));
    })();
  }, [date]);

  return (
    <Container>
      <TitleContainer>
        <Heading>
          Want to know which photo NASA took on your birthday? <Cake>🍰</Cake>{" "}
        </Heading>
      </TitleContainer>
      <Subtitle>
        Just type your birthday (or any other date) in the field below:
      </Subtitle>
      <DatePicker
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setDate(
            format(addDays(new Date(event.target.value), 1), "yyyy-MM-dd")
          )
        }
      />
      <ConfirmButton>
        <Link
          to={{
            pathname: "/picture",
          }}
          state={{ picture_data: pictureData }}
        >
          Let's see!
        </Link>
      </ConfirmButton>
    </Container>
  );
};
