import img1 from "../../assets/icons/1.png";
import img2 from "../../assets/icons/2.png";
import img3 from "../../assets/icons/3.png";
import img4 from "../../assets/icons/4.png";

const CoffeeFeatures = () => {
  return (
    <div className="bg-[#ECEAE3] py-6">
      <div className="w-4/5 mx-auto grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-8">
        <div>
          <img className="w-12 h-12 mb-2" src={img1} alt="Awesome Aroma" />
          <h3 className="text-2xl font-Rancho text-[#331A15]">Awesome Aroma</h3>
          <p className="text-[#1B1A1A]">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img className="w-12 h-12 mb-2" src={img2} alt="Awesome Aroma" />
          <h3 className="text-2xl font-Rancho text-[#331A15]">High Quality</h3>
          <p className="text-[#1B1A1A]">
            We served the coffee to you <br /> maintaining the best quality
          </p>
        </div>
        <div>
          <img className="w-12 h-12 mb-2" src={img3} alt="Awesome Aroma" />
          <h3 className="text-2xl font-Rancho text-[#331A15]">Pure Grades</h3>
          <p className="text-[#1B1A1A]">
            The coffee is made of the green <br /> coffee beans which you will love
          </p>
        </div>
        <div>
          <img className="w-12 h-12 mb-2" src={img4} alt="Awesome Aroma" />
          <h3 className="text-2xl font-Rancho text-[#331A15]">Proper Roasting</h3>
          <p className="text-[#1B1A1A]">
            Your coffee is brewed by first <br /> roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeFeatures;
