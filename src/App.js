import "./css/App.css";

import Login from "./components/login/Login";
import Register from "./components/register/Register";
import HomeScreen from "./HomeScreen";

import {
  BrowserRouter, 
  Routes,
  Route 
} from "react-router-dom"


function App() {
  return (
    <div className="app">

        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;

