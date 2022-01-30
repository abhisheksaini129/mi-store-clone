import PreNavbar from './Components/PreNavbar';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Slider from './Components/Slider';
import Offers from './Components/Offers';
import  data from './data/data.json';
import Headings from './Components/Headings.jsx';
import StarProduct from "./Components/StarProduct.jsx";
import HotAccessoriesMenu from "./Components/HotAccessoriesMenu.jsx";
import HotAccessories from './Components/HotAccessories.jsx';
import ProductReviews from './Components/ProductReviews.jsx';
import Videos from './Components/Videos.jsx';
import Banner from './Components/Banner.jsx';
import Footer from './Components/Footer.jsx'
import NavOption from './Components/NavOption.jsx'
import '../src/App.css';
function App() {
  
  return (
    
    <Router>
    <PreNavbar/>
    <Navbar/>
    <NavOption miPhones={data.miPhones} RedmiPhones={data.redmiPhones} TV={data.tv} Laptops={data.laptop} Fitness={data.fitnessAndLifeStyle} Home={data.home} Audio={data.audio} Accessories={data.accessories}/>
    <Slider ban={data.banner.start}/>
    <Offers offers={data.offer}/>
    <Headings text="STAR PRODUCTS"></Headings>
    <StarProduct product={data.starProduct}/>
    <Headings text="HOT ACCESSORIES"></Headings>
    <HotAccessoriesMenu></HotAccessoriesMenu>
    <Routes>
    <Route exact path="/" 
    element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}>
    </Route>
    <Route exact path="/smartDevices" 
    element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}>
    </Route>
    <Route exact path="/home" 
    element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>}>
    </Route>
    <Route exact path="/lifestyle" 
    element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>}>
    </Route>
    <Route exact path="/mobileAccessories" 
    element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}>
    </Route>
    </Routes>
    <Headings text="PRODUCT REVIEWS"></Headings>
    <ProductReviews ProductReviews={data.productReviews}/>
    <Headings text="VIDEOS"></Headings>
    <Videos videos={data.videos}/>
    <Headings text="IN THE PRESS"></Headings>
    <Banner banner={data.banner.end}/>
    <Footer footer={data.footer}/>
    </Router>
  );
}

export default App;
