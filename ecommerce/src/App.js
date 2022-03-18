import logo from './logo.svg';
import './App.css';
import Homepage from './components/pages/homepage/Homepage';
import './components/pages/homepage/Homepage.scss';
import Shop from './components/pages/shop/Shop';
// import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route path="/" element={<Homepage/ >} />
    <Route path="/shop" element={<Shop/ >} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
