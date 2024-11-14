
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop.jsx';
import Cart from './pages/Cart';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/footer/Footer.jsx';
import dogs_banner from './components/assets/banner_dogs.png'
import cat_banner from './components/assets/banner_cats.png'
import accessories_banner from './components/assets/banner_accessories.png'
import hotels_banner from './components/assets/banner_hotels.png'
import adopt_banner from './components/assets/banner_adopt.png'
import Company from './pages/Company.jsx';
import Offices from './pages/Offices.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}  />
          <Route path='/dogs' element={<ShopCategory banner={dogs_banner}  category="dogs" />} />
          <Route path='/cats' element={<ShopCategory banner={cat_banner} category="cats" />} />
          <Route path='/accessories' element={<ShopCategory banner={accessories_banner} category="accessories" />} />
          <Route path='/hotels' element={<ShopCategory banner={hotels_banner} category="hotels" />} />
          <Route path='/adopt' element={<ShopCategory banner={adopt_banner} category="adopt" />} />

          <Route path="/company" element={<Company />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path='/product' element={<Product/>}> 
            <Route path=':productId' element={<Product/>} />
          </Route>
          <Route path='/cart' element={<Cart/>}  />
          <Route path='/login' element={<LoginSignup/>}  />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
