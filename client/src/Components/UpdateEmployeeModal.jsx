/* eslint-disable react/prop-types */
// import { useState } from "react";
import axios from "axios";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

/* eslint-disable react/no-unescaped-entities */
const UpdateEmployeeModal = ({
  data,
  updateEmployeeModal,
  setUpdateEmployeeModal,
}) => {
  //   const getbyID_URL = `http://localhost:4000/api/get-user/${updateID}`;

  // const users = {
  //   name: "",
  //   fathername: "",
  //   email: "",
  //   phone: "",
  // };

  // console.log(data)

  const { _id, name, fathername, email, phone } = data;

  // console.log(data)
  const [uname, setUName] = useState(name);
  const [ufathername, setUFatherName] = useState(fathername);
  const [uemail, setUEmail] = useState(email);
  const [uphone, setUPhone] = useState(phone);

  // const [user, setUser] = useState(data);

  console.log(uname);

  const putURL = `http://localhost:4000/api/edit-user/${_id}`;

  const handleUpdateEmployee = async (e) => {
    e.preventDefault();
    try {
      await axios.put(putURL, { name:uname, fathername:ufathername, email:uemail, phone:uphone });
      setUpdateEmployeeModal(false);
      location.reload();
      // alert("USER UPDATED SUCCESSFULLY...");
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 inset-0 bg-black/50 backdrop-blur-sm Z-20">
        <div className="h-screen flex justify-center items-center">
          <form
            onSubmit={handleUpdateEmployee}
            className="relative h-[500px] w-[350px] p-10 bg-black/85 rounded-2xl flex flex-col justify-center items-start shadow-xl"
          >
            <h2 className="text-white font-raleway text-2xl mb-8">Edit User</h2>

            <MdOutlineCancel
              size={25}
              className="absolute top-4 right-4 text-red-600 hover:text-red-800 duration-200"
              onClick={() => {
                setUpdateEmployeeModal(!updateEmployeeModal);
              }}
            />
            <h2 className="text-white mb-2 text-left ">Name</h2>
            <input
              type="text"
              value={uname}
              onChange={(e) => {
                setUName(e.target.value);
              }}
              className="bg-transparent w-full border-b-2 border-gray-400 outline-none text-white mb-4"
            />

            <h2 className="text-white mb-2 text-left ">Father's Name</h2>
            <input
              type="text"
              value={ufathername}
              onChange={(e) => {
                setUFatherName(e.target.value);
              }}
              className="bg-transparent w-full border-b-2 border-gray-400 outline-none text-white mb-4"
            />

            <h2 className="text-white mb-2 text-left ">Email ID</h2>
            <input
              type="email"
              value={uemail}
              onChange={(e) => {
                setUEmail(e.target.value);
              }}
              className="bg-transparent w-full border-b-2 border-gray-400 outline-none text-white mb-4"
            />

            <h2 className="text-white  mb-2 text-left ">Phone Number</h2>
            <input
              type="number"
              value={uphone}
              onChange={(e) => {
                setUPhone(e.target.value);
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
    </>
  );
};

export default UpdateEmployeeModal;
