import { Link } from 'react-router-dom';
import img404 from '../assets/404/404.gif'
import { FaArrowLeft } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className='bg-white text-center py-10'>
            <Link to={'/'} className='text-2xl font-Rancho text-gray-900 flex items-center gap-3 justify-center'> <FaArrowLeft></FaArrowLeft> Back To Home</Link>
            <img className='w-fit mx-auto' src={img404} alt="" />
        </div>
    );
};

export default ErrorPage;