import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Quote from './pages/Quote';
import Investment from './pages/Investment';
import LifeInsurance from './pages/insurance/LifeInsurance';
import HealthInsurance from './pages/insurance/HealthInsurance';
import MotorInsurance from './pages/insurance/MotorInsurance';
import CommercialInsurance from './pages/insurance/CommercialInsurance';
import InvestmentLanding from './pages/investment/InvestmentLanding';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Calculators from './pages/investment/Calculators';

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/insurance/life" element={<LifeInsurance />} />
          <Route path="/insurance/health" element={<HealthInsurance />} />
          <Route path="/insurance/motor" element={<MotorInsurance />} />
          <Route path="/insurance/commercial" element={<CommercialInsurance />} />
          <Route path="/investment/overview" element={<InvestmentLanding />} />
          <Route path="/calculators" element={<Calculators />} />
        </Routes>
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;