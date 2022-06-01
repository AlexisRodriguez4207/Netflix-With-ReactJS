import { Route, Routes } from "react-router-dom";
import Navbar from "../src/Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element = {<Home />} />
    </Routes>
    </>
  );
}

export default App;
