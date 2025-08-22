import logo from '../../assets/more/logo1.png'
import bgImg from '../../assets/more/15.jpg'


const Navbar = () => {
    return (
        <div className=' w-fullbg-cover bg-center flex items-center justify-center gap-2 py-2' style={{backgroundImage: `url(${bgImg})`}}>
            <img className='w-15 h-18' src={logo} alt="" />
            <h2 className='text-4xl text-white font-Rancho'>Espresso Emporium</h2>
        </div>
    );
};

export default Navbar;