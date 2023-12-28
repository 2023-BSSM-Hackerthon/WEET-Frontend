import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from "./components/Modal";
import Main from "./pages/Landing";
import Application from "./pages/Application";
import AppList from "./pages/AppList";
import History from "./pages/History";
import CounselList from "./pages/CounselList";
import Auth from "./pages/Auth";
import AuthWrapper from "./components/AuthWrapper";

const App = () => {
  return (
    <>
      <Modal />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Application" element={<Application />} />
          <Route path="/Applist" element={<AppList />} />
          <Route path="/History" element={<History />} />
          <Route path="/CounselList" element={<CounselList />} />
          <Route path="/auth/bsm" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
