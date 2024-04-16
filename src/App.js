import React from "react";
import Homepage from "./Pages/Homepage";
import FindDoc from "./Pages/FindDoc";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/finddoc"  element={<FindDoc />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
