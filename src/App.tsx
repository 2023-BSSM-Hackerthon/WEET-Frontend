import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from "./components/Modal";
import Main from "./pages/Landing";
import Application from "./pages/Application";

const App = () => {
  return (
    <>
      <Modal />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/application" element={<Application />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
