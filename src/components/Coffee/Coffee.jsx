import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleDelete = (_id) => {
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              })
              const remainingCoffee = coffees.filter(remainCoffee => remainCoffee._id !== _id);
              setCoffees(remainingCoffee)
            }
          });
      }
    });
  };

  return (
    <div className="flex justify-center items-center gap-4 bg-[#F5F4F1] p-4 rounded-xl">
      <div>
        <img className="w-[180px] h-[220px]" src={photo} alt={name} />
      </div>
      <div className="text-gray-900">
        <p className="font-bold">
          Name: <span className="font-normal">{name}</span>
        </p>
        <p className="font-bold">
          Chef: <span className="font-normal">{chef}</span>
        </p>
        <p className="font-bold">
          Taste: <span className="font-normal">{taste}</span>
        </p>
      </div>
      <div className="text-white flex flex-col gap-2 mx-4">
        <Link to={`/coffeeDetails/${_id}`}>
          
          <button className="bg-[#D2B48C] p-2 rounded-sm">
            <FaEye></FaEye>
          </button>
        </Link>
        <Link to={`/updateCoffee/${_id}`}>
          
          <button className="bg-[#3C393B] p-2 rounded-sm">
            <MdEdit></MdEdit>
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-[#EA4744] p-2 rounded-sm"
        >
          <MdDelete></MdDelete>
        </button>
      </div>
    </div>
  );
};

export default Coffee;
