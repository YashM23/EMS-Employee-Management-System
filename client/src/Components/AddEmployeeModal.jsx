import axios from "axios";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/prop-types
const AddEmployeeModal = ({ addEmployeeModal, setAddEmployeeModal }) => {
  const [name, setName] = useState("");
  const [fathername, setFatherName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const postURL = "http://localhost:4000/api/create";

  const handleAddEmployee = async (e) => {
    e.preventDefault();
    try {
      const user = {
        name: name,
        fathername: fathername,
        email: email,
        phone: phone,
      };

      await axios.post(postURL, user);
      setAddEmployeeModal(!AddEmployeeModal);
      location.reload()
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 inset-0 bg-black/50 backdrop-blur-sm z-20">
      <div className="h-screen flex justify-center items-center ">
        <form
          onSubmit={handleAddEmployee}
          className="relative h-[500px] w-[350px] p-10 bg-black/85 rounded-2xl shadow-xl flex flex-col justify-center items-start"
        >
          <h2 className="text-white font-raleway text-2xl mb-8">Add a New User</h2>
          <MdOutlineCancel
            size={25}
            className="absolute top-4 right-4 text-red-600 hover:text-red-800 duration-200"
            onClick={() => {
              setAddEmployeeModal(!addEmployeeModal);
            }}
          />
          <h2 className="text-white mb-2 text-left ">Name</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="bg-transparent w-full border-b-2 border-gray-400 outline-none text-white mb-4"
          />

          <h2 className="text-white mb-2 text-left ">Father's Name</h2>
          <input
            type="text"
            value={fathername}
            onChange={(e) => {
              setFatherName(e.target.value);
            }}
            className="bg-transparent w-full border-b-2 border-gray-400 outline-none text-white mb-4"
          />

          <h2 className="text-white mb-2 text-left ">Email ID</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-transparent w-full border-b-2 border-gray-400 outline-none text-white mb-4"
          />

          <h2 className="text-white  mb-2 text-left ">Phone Number</h2>
          <input
            type="number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            className="bg-transparent w-full border-b-2 border-gray-400 outline-none text-white mb-4"
          />

          <button
            type="submit"
            className="px-3 py-2 bg-blue-600 text-white font-semibold rounded-lg mt-6"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
