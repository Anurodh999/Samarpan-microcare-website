import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import Features from './pages/Features.jsx';
import ProductList from './pages/ProductList.jsx';
import GetStarted from './Components/Landing Page/GetStarted.jsx';
import NavBar from './Components/Landing Page/navBar.js';
import Profile from './Components/profile.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PowerBIEmbed } from 'powerbi-client-react';

const App = () => {
  return (
    <BrowserRouter>
     
        <Routes>
        
        <Route exact path="/Samarpan-microcare-website" element={<About/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/features" element={<Features />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
    
    </BrowserRouter>
  );
};

export default App;