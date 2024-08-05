// import {Routes,Route} from "react-router-dom";

import TableData from "./Components/TableData.jsx";

function App() {
  return (
    <>
      {/* <div className="h-full bg-black flex flex-col justify-center items-center">
        <h2 className="text-white font-montserrat font-bold text-xl md:text-3xl p-4">
          Employee Management System
        </h2>
      </div> */}

      <div className="min-h-screen bg-gray-200 flex flex-col items-center">
        <h2 className="text-xl md:text-4xl text-center font-extrabold font-raleway w-full p-5 mb-10 shadow-2xl bg-black text-white">
          EMS - Employee Management System
        </h2>
        <TableData />
      </div>
    </>
  );
}

export default App;
