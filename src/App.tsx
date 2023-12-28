import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from "./components/Modal";
import Main from "./pages/Landing";
import Application from "./pages/Application";
import AppList from "./pages/AppList";
import History from "./pages/History";

const App = () => {
  return (
    <>
      <Modal />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/application" element={<Application />} />
          <Route path="/applist" element={<AppList />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
