import React from 'react';
import './index.css';
import Navbar from './component/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Gallery from './pages/Gallery/Gallery.jsx';
import Explore from './pages/Explore/Explore.jsx';
import NFTDetail from './pages/NFTDetail/NFTDetail.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import Footer from './component/Footer/Footer.jsx'

function App() {
  

  return (
    <>
    <div className="App">
    <Navbar />
      <div style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/nft/:id" element={<NFTDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
     
   <Footer/>
   </div>
    </>
  )
}

export default App
