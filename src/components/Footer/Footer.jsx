import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import footerImg from "../../assets/more/13.jpg";
import bgimg from "../../assets/more/24.jpg";
import logo from "../../assets/more/logo1.png";
import { Link } from "react-router-dom";
import { IoCall, IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-cover" style={{ backgroundImage: `url(${footerImg})` }}>
      <div className="w-4/5 mx-auto pt-10 pb-8 md:flex items-center gap-12">
        <div className="md:w-1/2">
          <img className="w-14 h-16" src={logo} alt="" />
          <h2 className="text-[#331A15] text-2xl font-Rancho text-shadow-lg/30 my-2">
            Espresso Emporium
          </h2>
          <p className="text-gray-900 py-2">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="text-[#331A15] flex gap-2">
            <Link to={"facebook.com"}>
              <FaFacebook className="w-6 h-6"></FaFacebook>
            </Link>
            <Link to={"x.com"}>
              <FaTwitter className="w-6 h-6"></FaTwitter>
            </Link>
            <Link to={"instagram.com"}>
              <FaInstagram className="w-6 h-6"></FaInstagram>
            </Link>
            <Link to={"linkedin.com"}>
              <FaLinkedin className="w-6 h-6"></FaLinkedin>
            </Link>
          </div>
          <h3 className="text-[#331A15] text-2xl font-Rancho text-shadow-lg/30 py-4">
            Get In Touch
          </h3>
          <div className="flex items-center gap-2 text-[#331A15]">
            <IoCall></IoCall>
            <p>+88 01533 333 333</p>
          </div>
          <div className="flex items-center gap-2 text-[#331A15]">
            <MdEmail></MdEmail>
            <p>info@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 text-[#331A15]">
            <IoLocation></IoLocation>
            <p>72, Wall street, King Road, Dhaka</p>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-[#331A15] text-2xl font-Rancho text-shadow-lg/30 md:mt-28">
            Contact With Us
          </h2>
          <div className="my-4">
            <fieldset className="fieldset">
              <input type="text" className="input bg-white text-gray-600 focus:border focus:border-[#E3B577] focus:ring-2 focus:ring-[#E3B577] " placeholder="Name" />
              <input type="email" className="input bg-white text-gray-600 focus:border focus:border-[#E3B577] focus:ring-2 focus:ring-[#E3B577] " placeholder="Email" />
              <textarea className="textarea bg-white text-gray-600 focus:border focus:border-[#E3B577] focus:ring-2 focus:ring-[#E3B577] " placeholder="Message"></textarea>
              <button  className="w-30 bg-white border-2 border-[#331A15] text-[#331A15]  text-shadow-lg/30 hover:bg-[#E3B577]  hover:text-white  rounded-full font-Rancho px-2 py-2">Send Message</button>
            </fieldset>
          </div>
        </div>
      </div>
      <div className="bg-cover" style={{ backgroundImage: `url(${bgimg})` }}>
        <h4 className="text-xl font-Rancho text-white text-center py-2">
          Copyright Espresso Emporium ! All Rights Reserved -D Sazedur Rahman
        </h4>
      </div>
    </div>
  );
};

export default Footer;
