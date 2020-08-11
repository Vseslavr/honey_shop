import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import OurProduct from "./components/OurProduct/OurProduct";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/home" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/product" component={OurProduct} />
      <Route path="/about" component={AboutUs} />
      <Route path="/contact" component={Contact} />
      <Route path="/checkout" component={Checkout} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
