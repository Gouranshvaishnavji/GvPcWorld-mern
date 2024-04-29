import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // Import BrowserRouter
import TopNav from './components/TopNav';
import Card from './components/cards';
import Footer from './components/footer';
import About from './page/About';
import Contact from './page/Contact';
import Terms from './page/Terms';
import CustommPC from './components/CustommPC';

const App = () => {
  return (
    <Router>
    <div className="home-page">
      <TopNav />
      <div>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/custompc" element={<CustommPC />} />
      </Routes>
      </div>
      <Footer />
    </div>
    </Router>
  );
};

export default App;
