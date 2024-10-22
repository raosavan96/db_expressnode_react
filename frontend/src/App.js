import React from "react";
import FormSec from "./Components/FormSec/FormSec";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataSec from "./Components/DataSec/DataSec";
import UpdateSec from "./Components/UpdateSec/UpdateSec";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormSec />} />
          <Route path="/data" element={<DataSec />} />
          <Route path="/update/:id" element={<UpdateSec />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
