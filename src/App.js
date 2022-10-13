import Home from "./components/screen/home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Spanish from "./components/screen/spanish";
import PreOrder from "./components/screen/Pre-order";
import Team from "./components/screen/Team";
import Aboutus from "./components/screen/Aboutus";
import Login from "./components/screen/Login";
import Signup from "./components/screen/Signup";
import AddCart from "./components/screen/AddCart";
import VrOffice from "./components/screen/vr-office";
import Cart from "./components/screen/cart";
import Dashboard from "./components/screen/Admin/Dashboardl";
import Review from "./components/screen/Admin/Review";
import { useCookies } from "react-cookie";

function App() {
  const [Cookie, setCookie] = useCookies();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spanish" element={<Spanish />} />
          <Route path="/pre-order" element={<PreOrder />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addcart" element={<AddCart />} />
          <Route path="/vr-office" element={<VrOffice />} />
          <Route path="/Cart" element={<Cart />} />
          {Cookie.Token && (
            <>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/reviews" element={<Review />} />
            </>
          )}
          <Route path="*" element={<Navigate to={Cookie.Token? "/admin/dashboard" :"/"} />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
