import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Header from './components/header/header'; // Corrected casing
import Footer from './components/footer/footer'; // Corrected casing
import Home from './components/home/home'; // Corrected casing
import About from './components/About/About'; // Corrected casing
import ContactUs from './components/ContactUs/ContactUs'; // Corrected casing

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contactUs" element={<ContactUs />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
