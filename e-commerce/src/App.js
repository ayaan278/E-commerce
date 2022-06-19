import Header from './components/modules/Header/Header';
import Footer from './components/modules/Footers/Footers'
import Homepage from './components/templates/Homepage';
import About from './components/templates/About';
import Shop from './components/templates/Shop';
import Contact from './components/templates/Contact';
import Cart from './components/templates/Cart';
import Checkout from './components/templates/Checkout';
import Login from './components/templates/Login';
import Signup from './components/templates/Signup';
import ComingSoon from './components/templates/ComingSoon';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
        <Header/>
          <Router>
            <Routes >
              <Route exact path="/" element = {<Homepage/>} />
              <Route path="/about" element = {<About/>} />
              <Route exact path="/shop" element = {<Shop/>} />
              <Route exact path="/contact" element = {<Contact/>} />
              <Route exact path="/cart" element = {<Cart/>} />
              <Route exact path="/checkout" element = {<Checkout/>} />
              <Route exact path="/log-in" element = {<Login/>} />
              <Route exact path="/sign-up" element = {<Signup/>} />
              <Route exact path="/coming-soon" element = {<ComingSoon/>} />
            </Routes>
          </Router>
        <Footer/>
    </>
  );
}

export default App;
