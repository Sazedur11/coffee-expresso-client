import rectangle9 from '../../assets/cups/Rectangle 9.png'
import rectangle10 from '../../assets/cups/Rectangle 10.png'
import rectangle11 from '../../assets/cups/Rectangle 11.png'
import rectangle12 from '../../assets/cups/Rectangle 12.png'
import rectangle13 from '../../assets/cups/Rectangle 13.png'
import rectangle14 from '../../assets/cups/Rectangle 14.png'
import rectangle15 from '../../assets/cups/Rectangle 15.png'
import rectangle16 from '../../assets/cups/Rectangle 16.png'

const InstagramGallery = () => {
  return (
    <div className="bg-white pt-10 pb-20">
      <div className="w-4/5 mx-auto flex flex-col justify-center items-center gap-3">
        <p className="text-gray-900 text-center">Follow Us Now</p>
        <h3 className="text-[#331A15] text-4xl font-Rancho text-center text-shadow-lg/30">
          Fowwol on Instagram
        </h3>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-6'>
            <img src={rectangle9} alt="" />
            <img src={rectangle10} alt="" />
            <img src={rectangle11} alt="" />
            <img src={rectangle12} alt="" />
            <img src={rectangle13} alt="" />
            <img src={rectangle14} alt="" />
            <img src={rectangle15} alt="" />
            <img src={rectangle16} alt="" />
        </div>
      </div>
    </div>
  );
};

export default InstagramGallery;
