import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Services from "./Pages/Services.jsx";
import Team from "./Pages/Team.jsx";
import Contact from "./Pages/Contact.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";
import LoginForm from "./components/LoginForm.jsx";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
          <Route index path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registrationform" element={<RegistrationForm />}></Route>
          <Route path="/loginform" element={<LoginForm />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
