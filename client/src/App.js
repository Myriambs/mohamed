import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './component/Navbar';
import Register2 from './component/register/Register2';
import Login from './component/login/Login';
import PrivateRoute from './component/privateroute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className="pages">
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path="/" element={<Register2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app/privateRoute" element={<PrivateRoute />}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
