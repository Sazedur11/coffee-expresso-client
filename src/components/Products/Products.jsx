import { SlCup } from "react-icons/sl";
import bgImg1 from "../../assets/more/1.png";
import { Link } from "react-router-dom";
import Coffee from "../Coffee/Coffee";

const Products = ({ allCoffee }) => {
  

  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${bgImg1})`,
      }}
    >
      <div className="w-4/5 mx-auto flex flex-col justify-center items-center gap-3">
        <p className="text-gray-900 text-center">--- Sip & Savor ---</p>
        <h3 className="text-[#331A15] text-4xl font-Rancho text-center text-shadow-lg/30">
          Our Popular Products
        </h3>
        <Link to={"/addCoffee"}>
          <button className="bg-[#E3B577] border-2 border-[#331A15] text-white text-shadow-lg/30 hover:bg-white  hover:text-gray-900  rounded-sm font-Rancho px-4 py-1 flex items-center gap-2">
            Add Coffee <SlCup></SlCup>{" "}
          </button>
        </Link>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-8">
          {allCoffee.map((coffee) => (
            <Coffee key={coffee._id} coffee={coffee}></Coffee>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
