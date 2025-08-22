import bgImg1 from "../../assets/more/4.png";
import bgImg2 from "../../assets/more/5.png";

const Products = () => {
  return (
      <div
        className="py-50 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${bgImg1}), url(${bgImg2})`,
          backgroundPosition: "top left, right bottom",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "200px 200px, contain",
        }}
      >
        <div>
            <p className="text-gray-900">--- Sip & Savor ---</p>
            <h3 className="text-gray-900 text-5xl font-Rancho">Our Popular Products</h3>
        </div>
      </div>
  );
};

export default Products;
