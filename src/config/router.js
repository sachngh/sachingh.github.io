import React from "react"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import AboutUsPage from '../Components/AboutUsPage.jsx'
import Home from '../Components/Home.jsx'
import ProductsPage from '../Components/ProductsPage.jsx'
import Health from '../Components/Health.jsx'
import CareersPage from '../Components/CareersPage.jsx'
import Login from "../Components/Login.jsx"
// import Admin from "../Components/Admin.jsx"
import ContactUsPage from '../Components/ContactUsPage.jsx'
import ServicesPage from "../Components/ServicesPage.jsx"

class AppRouter extends React.Component {
    render() {
        return (
                  <Router>
                  <Routes>
                      <Route path="/" element={<Home/>} exact/>

                      <Route path="/about" element={<AboutUsPage/>} exact/>

                      <Route path="/products" element={<ProductsPage/>} exact />

                      <Route path="/health" element={<Health/>} exact />

                      <Route path="/career" element={<CareersPage/>} exact/>

                      <Route path="/login" element={<Login/>} exact />

                

                      <Route path="/contact" element={<ContactUsPage/>} exact />

                      <Route path="/services" element={<ServicesPage/>} exact />
                      </Routes>
                  </Router>

        )
    }
}
export default AppRouter;