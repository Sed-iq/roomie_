import { useState } from "react";
import { FaCheckCircle, FaUser } from "react-icons/fa";
import {
  MdEditCalendar,
  MdEmail,
  MdOutlineCalendarMonth,
} from "react-icons/md";

// Information screen
export default ({ setInfoicon, email, setemail }) => {
  setInfoicon("text-gray-600");
  const [name, setName] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  return (
    <div
      id="information"
      className="w-full sm:h-auto h-full flex sm:p-0 p-3 flex-col items-center "
    >
      <div className="w-full">
        <div className="sm:w-full w-auto sm:m-0 px-4">
          <p className="text-lg opensans-b">User Details</p>
          <p className="my-2 text-xs font-bold text-gray-600">
            Fill in your details before proceeding with your order.
          </p>
        </div>
      </div>
      <form
        action=""
        className="sm:w-full sm:block flex flex-col items-center w-11/12"
      >
        <div className="my-5 w-full ">
          <p className="text-sm opensans-b">Email Address</p>

          <div className="bg-white flex justify-between border-2 border-gray-200 items-center p-2 rounded my-3 w-full">
            <MdEmail className="text-3xl sm:text-xl text-gray-400" />
            <input
              onChange={(e) => {
                setemail(e.target.value);
              }}
              defaultValue={email}
              type="email"
              required
              placeholder="johndoe@example.com"
              className="sm:text-xs text-sm mx-3 text-gray-700 outline-none p-2 sm:py-1 w-full h-full"
            />
            <FaCheckCircle
              className={`${
                email == "" ? "text-gray-400" : "text-green-600"
              } text-xl mx-2`}
            />
          </div>
        </div>
        <div className="my-5 w-full ">
          <p className="text-sm opensans-b">Full Name</p>
          <div className="bg-white flex justify-between border-2 border-gray-200 items-center p-2 rounded my-3 w-3/4w-full">
            <FaUser className="sm:text-sm text-xl text-gray-400" />
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
              placeholder="John doe"
              className="sm:text-xs text-sm mx-3 text-gray-700 outline-none p-2 sm:py-1 w-full h-full"
            />
            <FaCheckCircle
              className={`${
                name == "" ? "text-gray-400" : "text-green-600"
              } text-xl mx-2`}
            />
          </div>
        </div>
        <div className="my-5 w-full ">
          <p className="text-sm opensans-b">Check in date</p>
          <div className="bg-white flex justify-between border-2 border-gray-200 items-center p-2 rounded my-3 w-3/4w-full">
            <MdEditCalendar className="text-xl text-gray-400" />
            <input
              onChange={(e) => setCheckin(e.target.value)}
              type="date"
              required
              className="text-xs mx-3 text-gray-700 outline-none p-2 sm:py-1 w-full h-full"
            />
            <FaCheckCircle
              className={checkin == "" ? "text-gray-400" : "text-green-600"}
            />
          </div>
        </div>
        <div className="my-5 w-full ">
          <p className="text-sm opensans-b">Check out date</p>
          <div className="bg-white flex justify-between border-2 border-gray-200 items-center p-2 rounded my-3 w-3/4w-full">
            <MdOutlineCalendarMonth className="text-xl text-gray-400" />
            <input
              onChange={(e) => setCheckout(e.target.value)}
              type="date"
              required
              className="text-xs mx-3 text-gray-700 outline-none p-2 sm:py-1 w-full h-full"
            />
            <FaCheckCircle
              className={`${
                checkout == "" ? "text-gray-400" : "text-green-600"
              } text-xl mx-2`}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
