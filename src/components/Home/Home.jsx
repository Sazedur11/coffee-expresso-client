import Banner from "../Banner/Banner";
import CoffeeFeatures from "../CoffeeFeatures/CoffeeFeatures";
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
    </div>
  );
};

export default Home;
