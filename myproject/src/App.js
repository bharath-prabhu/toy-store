import './App.css';
import AnimePage from './home/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login/login';
//import Combine from './firstpage/combine';
import Maincombo from './mainpage/maincombo';
import Join from './carToys/Join';
import Combo from './colorToys/combo';
import Combine from './firstpage/combine';
import Enter from './Enter';
import Privacy from './privacy/privacy';
import Termscondition from './privacy/TermsConditon';
import Cart from './cart/cart';
import TransparentForm from './ItemPicked/ItemPicked';
// import Explore from './mainpage/explore';
// import Navbar from './mainpage/main';
//import Maincombo from './mainpage/maincombo';

//import Main from './mainpage/main';
//import Join from './carToys/Join';
//import PrimarySearchAppBar2 from './nav';
//import Combo from './colorToys/combo';
//import Combine from './firstpage/combine';
//import ImgMediaCard from './firstpage/summa';
//import AnimePage from './home/home';



//import Completed from './completed/completed';


//import LoginForm from './login/login';

//import Login from './login/login';

function App() {
  
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<AnimePage/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Enter" element={<Enter/>}/>
            <Route path="/Home" element={<Maincombo/>}/>
            <Route path="/Teddy" element={<Combine/>}/>
            <Route path="/Car" element={<Join/>}/>
            <Route path="/Color" element={<Combo/>}/>
            <Route path="/Privacy" element={<Privacy/>}/>
            <Route path="/Terms" element={<Termscondition/>}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route path="/Itempicked" element={<TransparentForm/>}/>
            

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

// {/* <AnimePage/> */}
// {/* <LoginForm/> */}
// {/* <PrimarySearchAppBar2/>
// <Explore/> */}

// {/* <Combine/> */}
// {/* <Combo/> */}

// {/* <Join/> */}
// {/* <ImgMediaCard images="https://m.media-amazon.com/images/I/81arfNR+-YL._AC_UL480_FMwebp_QL65_.jpg"/> */}
// {/* <Navbar/> */}
// {/* <Maincombo/> */}