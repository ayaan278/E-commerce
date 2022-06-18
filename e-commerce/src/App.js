import Header from './components/modules/Header/Header';
import Footer from './components/modules/Footers/Footers'
import Homepage from './components/templates/Homepage';
import About from './components/templates/About';
import Shop from './components/templates/Shop';
import Shop2 from './components/templates/Shop2';
import Shop3 from './components/templates/Shop3';
import Contact from './components/templates/Contact';
import Cart from './components/templates/Cart';
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
              <Route exact path="/shop-02" element = {<Shop2/>} />
              <Route exact path="/shop-03" element = {<Shop3/>} />
              <Route exact path="/contact" element = {<Contact/>} />
              <Route exact path="/cart" element = {<Cart/>} />
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
