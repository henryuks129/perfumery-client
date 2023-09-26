import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './Layouts/Navbar';
import Footer from './Layouts/Footer';
import Cart from './components/Cart';
import SingleProducts from './Pages/SingleProducts';
import AllProducts from './Pages/AllProducts';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import PasswordReset from './Pages/PasswordReset';
import ForgottenPassword from './Pages/ForgottenPassword';
import axios from 'axios';

// axios.defaults.withCredentials = true 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Singleproducts/:id' element={<SingleProducts/>} />
        <Route path='/Allproducts' element={<AllProducts/>} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Signin' element={<Signin/>} />
        <Route path='/ForgottenPassword' element={<ForgottenPassword/>} />
        <Route path='/PasswordReset' element={<PasswordReset/>} />
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
