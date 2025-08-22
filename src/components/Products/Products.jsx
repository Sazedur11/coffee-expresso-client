import { SlCup } from "react-icons/sl";
import bgImg1 from "../../assets/more/4.png";
import bgImg2 from "../../assets/more/5.png";

const Products = () => {
  return (
      <div
        className="bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${bgImg1}), url(${bgImg2})`,
          backgroundPosition: "top left, right bottom",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "200px 200px, contain",
        }}
      >
        <div className="w-4/5 mx-auto flex flex-col justify-center items-center gap-3">
            <p className="text-gray-900 text-center">--- Sip & Savor ---</p>
            <h3 className="text-[#331A15] text-4xl font-Rancho text-center text-shadow-lg/30">Our Popular Products</h3>
            <button className="bg-[#E3B577] border-2 border-[#331A15] text-white text-shadow-lg/30 hover:bg-white  hover:text-gray-900  rounded-sm font-Rancho px-4 py-1 flex items-center gap-2">Add Coffee <SlCup></SlCup> </button>
        </div>
      </div>
  );
};

export default Products;
