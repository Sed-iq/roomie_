import { FaDollarSign, FaMinusCircle } from "react-icons/fa";
import removeCart from "./removeCart";

// Cart components
export default ({ name, img, price, id, setCart }) => {
  return (
    <div className="flex sm:my-3 justify-center">
      <div className="w-full flex justify-between">
        <div
          id="cart-img"
          className="w-1/2 flex rounded items-center justify-center mx-3"
        >
          {/* img */}
          <img srcSet={img} title={name} className="rounded" />
        </div>
        <div className="w-full h-full py-2 flex flex-col sm:justify-center justify-between">
          <p className=" opensans-b text-sm my-2 text-slate-800">{name}</p>
          <p className="text-sm opensans-b flex items-center text-slate-600">
            <FaDollarSign className="sm:text-sm text-xs" />
            {price}{" "}
            <span className="text-gray-400 text-xs opensans">/night</span>
          </p>
        </div>
        <div className="">
          <FaMinusCircle
            onClick={() => removeCart(id, setCart)}
            className="text-xm text-red-600 hover:text-red-800"
          />
        </div>
      </div>
    </div>
  );
};
