import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="app_body">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Posts />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
