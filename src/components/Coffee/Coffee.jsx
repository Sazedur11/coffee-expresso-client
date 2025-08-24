import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const Coffee = ({coffee}) => {

    const { name, chef, supplier, taste, category, details, photo } = coffee;

    return (
        <div className="flex justify-center items-center gap-4 bg-[#F5F4F1] p-4 rounded-xl">
            <div>
                <img src={photo} alt={name} />
            </div>
            <div className="text-gray-900">
                <p className="font-bold">Name: <span className="font-normal">{name}</span></p>
                <p className="font-bold">Chef: <span className="font-normal">{chef}</span></p>
                <p className="font-bold">Taste: <span className="font-normal">{taste}</span></p>
            </div>
            <div className="text-white flex flex-col gap-2 mx-4">
                <Link to={'/'} > <button  className="bg-[#D2B48C] p-2 rounded-sm"><FaEye></FaEye></button> </Link>
                <Link to={'/'} > <button  className="bg-[#3C393B] p-2 rounded-sm"><MdEdit></MdEdit></button> </Link>
                <Link to={'/'} > <button  className="bg-[#EA4744] p-2 rounded-sm"><MdDelete></MdDelete></button> </Link>
            </div>
        </div>
    );
};

export default Coffee;