import { Route, Routes } from "react-router-dom";
import CardBoolean from "./pages/cardBoolean";
import CardNumber from "./pages/cardNumber";
import CardObject from "./pages/cardObject";
import CardString from "./pages/cardString";
import Layout from "./components/layout";
import NoMatch from "./pages/noMatch";
import Home from "./pages/home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="card-boolean" element={<CardBoolean />} />
          <Route path="card-number" element={<CardNumber />} />
          <Route path="card-string" element={<CardString />} />
          <Route path="card-object" element={<CardObject />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
