import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import AddEmployeeModal from "./AddEmployeeModal";
import UpdateEmployeeModal from "./UpdateEmployeeModal";

const TableData = () => {
  const [tabledata, setTabledata] = useState([]);
  const [addEmployeeModal, setAddEmployeeModal] = useState(false);
  const [updateEmployeeModal, setUpdateEmployeeModal] = useState(false);
  const [updateID_Data, setUpdateID_Data] = useState();

  //   console.log(tabledata)
  //FETCHING ALL THE USERS FROM THE DATABASE
  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:4000/api/get-users");
    setTabledata(response.data.users);
  };

  //DELETES THE USER
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/delete-user/${id}`);
      location.reload();
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };

  //HELPS IN GETTING THE ID OF THE RESPECTIVE USER
  const handleUpdateID = (id) => {
    const userdata = tabledata.find((data) => {
      return data._id === id;
    });
    setUpdateID_Data(userdata);
    setUpdateEmployeeModal(true);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className=" h-full ">
      <div className="flex flex-col items-center justify-center ">
        <div className="">
          <button
            onClick={() => {
              setAddEmployeeModal(!addEmployeeModal);
            }}
            className="p-2 mb-4 bg-blue-600 hover:bg-blue-800 duration-200 text-white font-semibold rounded-lg text-xs md:text-sm"
          >
            ADD EMPLOYEE
          </button>
          {addEmployeeModal && (
            <AddEmployeeModal
              addEmployeeModal={addEmployeeModal}
              setAddEmployeeModal={setAddEmployeeModal}
            />
          )}
        </div>
        <table className="table-fixed shadow-2xl w-11/12 max-w-xl md:max-w-5xl mx-auto">
          <thead className="bg-black text-white">
            <tr className="">
              <th className="p-2 sm:p-3 md:p-5 text-sm md:text-lg tracking-wide font-semibold text-left">
                Name
              </th>
              <th className="p-2 sm:p-3 md:p-5 text-sm md:text-lg tracking-wide font-semibold text-left">
                Father Name
              </th>
              <th className="p-2 sm:p-3 md:p-5 text-sm md:text-lg tracking-wide font-semibold text-left">
                Email
              </th>
              <th className="p-2 sm:p-3 md:p-5 text-sm md:text-lg tracking-wide font-semibold text-left ">
                Phone No.
              </th>
              <th className="p-2 sm:p-3 md:p-5 text-sm md:text-lg tracking-wide font-semibold text-center ">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="border-b-2 border-gray-600 ">
            {tabledata.map((data, index) => (
              <>
                <tr
                  className={`${index % 2 == 0 ? "" : "bg-gray-400/20"}`}
                  key={data._id}
                >
                  {/* {console.log(data._id)} */}
                  <td className="p-2 sm:p-3 md:p-5 text-xs md:text-lg text-gray-700 truncate">
                    {data.name}
                  </td>
                  <td className="p-2 sm:p-3 md:p-5 text-xs md:text-lg text-gray-700 truncate">
                    {data.fathername}
                  </td>
                  <td className="p-2 sm:p-3 md:p-5 text-xs md:text-lg text-gray-700 truncate">
                    {data.email}
                  </td>
                  <td className="p-2 sm:p-3 md:p-5 text-xs md:text-lg text-gray-700 truncate">
                    {data.phone}
                  </td>
                  <td className="p-2 sm:p-3 md:p-5 text-center flex justify-center">
                    <button
                      onClick={() => {
                        handleUpdateID(data._id);
                      }}
                      className="text-black hover:text-green-500 duration-300 text-xs md:text-sm font-bold mr-2 "
                    >
                      <FaRegEdit size={20} className="" />
                    </button>
                    <button
                      onClick={() => {
                        deleteUser(data._id);
                      }}
                      className="text-black hover:text-red-500 duration-300 text-xs md:text-sm font-bold"
                    >
                      <MdDelete size={25} className="" />
                    </button>
                  </td>
                </tr>
              </>
            ))}

            {/* {"UPDATE EMPLOYEE MODAL"} */}
            {updateEmployeeModal && (
              <UpdateEmployeeModal
                data={updateID_Data}
                updateEmployeeModal={updateEmployeeModal}
                setUpdateEmployeeModal={setUpdateEmployeeModal}
              />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableData;
