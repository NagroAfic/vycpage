import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import './index.css'
import App from './App'
import Nosotros from "./routes/nosotros"
import Header from "./components/header";
import Footer from "./components/footer";
ReactDOM.render(
  <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="nosotros" element={<Nosotros />} />
      </Routes>
    <Footer/>
  </BrowserRouter>,
  document.getElementById('root')
)
