import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./landing";
import { FaSpinner } from "react-icons/fa";

export default ({ setLoad }) => {
  setTimeout(() => setLoad(false), 3000);
  return (
    <div className=" relative h-screen ">
      <Router>
        <Routes>
          <Route path="*" element={<Loading />} />
        </Routes>
      </Router>
    </div>
  );
};
function Loading() {
  return (
    <div className="relative h-full  p-2 overflow-y-hidden">
      <div
        id="load"
        className="absolute left-0  bottom-0 flex text-white justify-center items-center w-full h-full z-10"
      >
        <div
          id="load_modal"
          className="bg-transparent flex flex-col justify-center items-center p-3 rounded"
        >
          <FaSpinner className="text-3xl animate-spin" />
          <p className="text-sm my-1">Loading...</p>
        </div>
      </div>
      <Landing show={"hidden"} />
    </div>
  );
}
