import React, { useState } from "react";
import Logo from "../assets/rentifyLogo.png";

import {
  VehicleType,
  PersonalDetails,
  NumberOfWheels,
  VehicleModel,
  DatePicker,
} from "../components";

// Form component
const Form = () => {
  // State to manage the current page of the form
  const [page, setPage] = useState(0);

  // Titles for each page of the form
  const titles = [
    "Personal Details",
    "Number of wheels",
    "Vehicle Type",
    "Vehicle Model",
    "Pick the Date",
  ];

  // Function to display the current page of the form
  const displayPage = () => {
    if (page === 0) {
      return <PersonalDetails page={page} setPage={setPage} />;
    } else if (page === 1) {
      return <NumberOfWheels page={page} setPage={setPage} />;
    } else if (page === 2) {
      return <VehicleType page={page} setPage={setPage} />;
    } else if (page === 3) {
      return <VehicleModel page={page} setPage={setPage} />;
    } else {
      return <DatePicker page={page} setPage={setPage} />;
    }
  };

  // Render the form
  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-500 to-blue-600 w-full h-screen min-h-screen flex flex-col ">
      {/* Logo */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md -mt-24 ">
        <img src={Logo} alt="Rentify Logo" />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md  -mt-28">
        {/* We'll see to make this if we tie */}
        {/* <div>Progress Bar</div> */}

        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 mb-3">
          {titles[page]}
        </h1>
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {/* Display current page content */}
          <div>{displayPage()}</div>
        </div>
      </div>
    </div>
  );
};

export default Form;
