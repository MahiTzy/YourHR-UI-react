import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Confirm from './pages/confirm';
import Home from './pages/home';
import Signup from './pages/signup';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
