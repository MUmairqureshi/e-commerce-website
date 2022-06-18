import { Home } from '../home/home'
import axios from 'axios';
import { Productdtl } from '../product-detail/product-dtl'
import { Head } from './navbar'
import { Contact } from '../contact/contonfo'
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Product } from "../product/product";
import { Card } from "../cart/card";
import { Signin } from "../account-creation/signin/signin";
import { Forget } from "../account-creation/signin/forget";
import { Signup } from "../account-creation/signup/signup";



import { useState } from "react";
import './head.scss'



export function Header() {


  const [prodstate, setProdstate] = useState([])
  const [filter, setFilter] = useState(prodstate)
  const [error, setError] = useState([])

  const dataprodeuct = axios.get('https://fakestoreapi.com/products/')
    .then((response) => {
      setProdstate(response.data)
      console.log(setProdstate)
    })
    .catch((data) => {
      setError(data)
    })

  console.log(prodstate)
  console.log(filter)

  return (
    <div className="App">
      <Router>
        <Head />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />

          <Route path="/product/:id" element={<Productdtl />} />
          <Route path="/card" element={<Card />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget" element={<Forget />} />

        </Routes>


      </Router>
    </div>
  );
}
