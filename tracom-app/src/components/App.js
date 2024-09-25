import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./NavBar"
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Team from "./Team";
import Contact from "./Contact";

const App = () =>{

    return(

        <Router>
            <div>
                <NavBar />
                    <Routes>
                        <Route path="/"  element={ <Home />} />
                        <Route path="/about" element={ <About />} />
                        <Route path="/services" element={ <Services />} />
                        <Route path="/team" element={ <Team />} />
                        <Route path="/contact" element={ <Contact />} />
                    </Routes>

            </div>
        </Router>

        
    )
}

export default App;