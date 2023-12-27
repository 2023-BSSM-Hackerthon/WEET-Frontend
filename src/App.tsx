import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from "./components/Modal";

const App = () => {
  return (
    <>
      <Modal />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
