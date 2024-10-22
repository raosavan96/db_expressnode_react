import React from "react";
import FormSec from "./Components/FormSec/FormSec";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataSec from "./Components/DataSec/DataSec";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormSec />} />
          <Route path="/data" element={<DataSec />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
