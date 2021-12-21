import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppData from "./components/AppData/AppData";
import RouteData from "./components/RouteData/RouteData";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <AppData />
        <Routes>
          <Route path="/next-page" element={<RouteData />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
