import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaArrowLeft } from "react-icons/fa";

const CoffeeDetails = () => {
  const coffeeDetails = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo } =
    coffeeDetails;

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-white pt-10 pb-20">
        <div className="w-4/5 mx-auto">
          <Link
            className="w-33 text-[#374151] text-shadow-lg/30 font-Rancho px-4 py-2 rounded-sm hover:bg-[#D2B48C] flex items-center gap-2"
            to={"/"}
          >
            <FaArrowLeft></FaArrowLeft> Back to home
          </Link>
          <div className="flex justify-center items-center gap-12 bg-[#F4F3F0] p-20">
            <div><img src={photo} alt={name} /></div>
            <div>
                <p className="font-semibold text-gray-900">Name: <span className="font-normal">{name}</span></p>
                <p className="font-semibold text-gray-900">Chef: <span className="font-normal">{chef}</span></p>
                <p className="font-semibold text-gray-900">supplier: <span className="font-normal">{supplier}</span></p>
                <p className="font-semibold text-gray-900">taste: <span className="font-normal">{taste}</span></p>
                <p className="font-semibold text-gray-900">category: <span className="font-normal">{category}</span></p>
                <p className="font-semibold text-gray-900">details: <span className="font-normal">{details}</span></p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CoffeeDetails;
