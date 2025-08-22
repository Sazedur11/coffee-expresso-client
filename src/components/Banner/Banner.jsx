import banner from "../../assets/more/3.png";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center md:py-50 py-20 flex md:justify-end md:px-40 px-10"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="w-[640px]">
        <h2 className="text-2xl md:text-5xl font-Rancho">
          Would you like a Cup of Delicious Coffee?
        </h2>
        <p className="my-4">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="bg-[#E3B577] border-2 border-[#E3B577] text-gray-900 hover:bg-gray-950/90 hover:text-white hover:border-2 hover:border-white rounded-sm font-Rancho px-4 py-1">Learn More</button>
      </div>
    </div>
  );
};

export default Banner;
