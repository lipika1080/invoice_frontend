import React from "react";
import { Route, Routes } from "react-router-dom";
import InvoiceList from "./InvoiceList";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<InvoiceList />} />
    </Routes>
  );
};

export default App;
