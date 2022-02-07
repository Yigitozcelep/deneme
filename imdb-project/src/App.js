import { Route, Routes } from "react-router-dom";
import DetailCeleb from "./components/DetailCeleb";
import FirstPage from "./components/FirstPage";
import "./index.css";
function App() {
  return (
    <Routes className="mainElement">
      <Route path="/" element={<FirstPage />} />
      <Route path="/sort-by-age" element={<FirstPage sort="sort-by-age" />} />
      <Route
        path="/sort-by-height"
        element={<FirstPage sort="sort-by-height" />}
      />
      <Route path="/home" element={<DetailCeleb />} />
    </Routes>
  );
}

export default App;
