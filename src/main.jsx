import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Gallery from './gallery/gallery.jsx'
import Quote from './quote/quote.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />}/>
      <Route exact path="/gallery" element={<Gallery />}/>
      <Route exact path="/quote" element={<Quote/>}/>
    </Routes>
  </BrowserRouter>

)
