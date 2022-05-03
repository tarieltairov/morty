import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home/Home';
import Price from './page/Price/Price';
import Header from './component/Heager'
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/price' element={<Price />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
