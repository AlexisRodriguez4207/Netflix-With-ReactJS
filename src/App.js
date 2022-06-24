import { Route, Routes } from "react-router-dom";
import Navbar from "../src/Components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./Pages/Home";

function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
      </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
