import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home/Home';
import Price from './page/Price/Price';
import Login from './page/Login/Login';
import Header from './component/Heager'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/price' element={<Price />}/>
          <Route path='/auth' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
