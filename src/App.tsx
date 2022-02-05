import { GlobalStyle } from "./styles/createGlobalStyles";

import { Navigation } from "./routes";

export const App: React.FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
    </>
  );
};
