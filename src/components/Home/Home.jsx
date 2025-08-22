import Banner from "../Banner/Banner";
import CoffeeFeatures from "../CoffeeFeatures/CoffeeFeatures";
import Footer from "../Footer/Footer";
import InstagramGallery from "../InstagramGallery/InstagramGallery";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <CoffeeFeatures></CoffeeFeatures>
      <div className="bg-white py-20">
        <Products></Products>
      </div>
      <InstagramGallery></InstagramGallery>
      <Footer></Footer>
    </div>
  );
};

export default Home;
