import { Route, Routes } from "react-router-dom";
import Navbar from "../src/Components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Account from "./Pages/Account";

function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Account' element={<Account />} />
      </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;

