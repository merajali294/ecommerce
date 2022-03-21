import logo from './logo.svg';
import './App.css';
import Homepage from './components/pages/homepage/Homepage';
import './components/pages/homepage/Homepage.scss';
import Shop from './components/pages/shop/Shop';
import Header from './components/pages/Header/Header';
import Signinsignout from './components/pages/signinsignout/signinsignout';
// import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <Header/>
    <Router>
    <Routes>
    <Route path="/" element={<Homepage/ >} />
    <Route path="/shop" element={<Shop/ >} />
    <Route path="/signin" element={<Signinsignout/ >} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
