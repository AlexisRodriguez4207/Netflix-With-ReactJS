import { Route, Routes } from "react-router-dom";
import Navbar from "../src/Components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Account from "./Pages/Account";


function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/account' element={<Account/>} />
      </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
