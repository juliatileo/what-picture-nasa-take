import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Picture } from "./pages/Picture";

export const Navigation: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/picture" element={<Picture />} />
      </Routes>
    </Router>
  );
};
