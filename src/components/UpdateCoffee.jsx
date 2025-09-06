import { Link, useLoaderData } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const allCoffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = allCoffee;
  console.log(_id)

  const handleUpdatedCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffeeDetails = { name, chef, supplier, taste, category, details, photo };

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(updatedCoffeeDetails)
    })
    .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "success!",
                text: "Updated Coffee Details successfull",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-white pt-10 pb-20">
        <div className="w-4/5 mx-auto">
          <Link
            className="w-33 text-[#374151] text-shadow-lg/30 font-Rancho px-4 py-2 rounded-sm hover:bg-[#D2B48C] flex items-center gap-2"
            to={"/"}
          >
            <FaArrowLeft></FaArrowLeft> Back to home
          </Link>
          <div className="bg-[#F4F3F0] px-10 py-15">
            <h3 className="text-[#331A15] text-4xl font-Rancho text-center text-shadow-lg/30">
              Update Existing Details: {name}
            </h3>
            <p className="text-gray-900 text-center w-2xl mx-auto my-4">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
            <form onSubmit={handleUpdatedCoffee}>
              {/* form raw*/}
              <div className="flex gap-4 mb-4">
                <div className="flex flex-col gap-2 w-1/2">
                  <label className="text-gray-900">Name</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    className="w-full input bg-white text-gray-600 focus:border focus:border-[#E3B577] focus:ring-2 focus:ring-[#E3B577] "
                    placeholder="Coffee Name"
                  />
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                  <label className="text-gray-900">Chef</label>
                  <input
                    type="text"
                    name="chef"
                    defaultValue={chef}
                    className="input w-full bg-white text-gray-600 focus:border focus:border-[#E3B577] focus:ring-2 focus:ring-[#E3B577] "
                    placeholder="Coffee Chef"
                  />
                </div>
              </div>
              {/* form raw*/}
              <div className="flex gap-4 mb-4">
                <div className="flex flex-col gap-2 w-1/2">
                  <label className="text-gray-900">Supplier</label>
                  <input
                    type="text"
                    name="supplier"
                    defaultValue={supplier}
                    className="w-full input bg-white text-gray-600 focus:border focus:border-[#E3B577] focus:ring-2 focus:ring-[#E3B577] "
                    placeholder="Supplier"
                  />
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                  <label className="text-gray-900">Taste</label>
                  <input
                    type="text"
                    name="taste"
                    defaultValue={taste}
                    className="input w-full bg-white text-gray-600 focus:border focus:border-[#E3B577] focus:ring-2 focus:ring-[#E3B577] "
                    placeholder="Taste"
                  />
                </div>
              </div>
              {/* form raw*/}
              <div className="flex gap-4 mb-4">
                <div className="flex flex-col gap-2 w-1/2">
                  <label className="text-gray-900">Category</label>
                  <input
                    type="text"
                    name="category"
                    defaultValue={category}
                    className="w-full input bg-white text-gray-600 focus:border focus:border-[#E3B577] focus:ring-2 focus:ring-[#E3B577] "
                    placeholder="Category"
                  />
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                  <label className="text-gray-900">Details</label>
                  <input
                    type="text"
                    name="details"
                    defaultValue={details}
                    className="input w-full bg-white text-gray-600 focus:border focus:border-[#E3B577] focus:ring-2 focus:ring-[#E3B577] "
                    placeholder="Details"
                  />
                </div>
              </div>
              {/* form raw*/}
              <div className="flex flex-col gap-2 mb-4">
                <label className="text-gray-900">Photo Url</label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  className="w-full input bg-white text-gray-600 focus:border focus:border-[#E3B577] focus:ring-2 focus:ring-[#E3B577] "
                  placeholder="Photo Url"
                />
              </div>
              <input
                className="text-[#331A15] font-Rancho btn btn-block bg-[#D2B48C]"
                type="submit"
                value="Update Coffee Details"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateCoffee;
