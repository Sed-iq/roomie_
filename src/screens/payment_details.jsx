import { useState } from "react";
import { FaCheckCircle, FaUser } from "react-icons/fa";
import { MdCreditCard, MdLocationPin } from "react-icons/md";

export default ({ setpaymentab, cart }) => {
  const [card, setCard] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  setpaymentab("text-gray-600");
  return (
    <div
      id="payment"
      className="w-full sm:h-auto h-full overflow-y-auto sm:p-0 p-3 flex flex-col"
    >
      <div className="w-full">
        <p className="text-lg opensans-b">Payment Details</p>
        <p className="my-2 text-xs font-bold text-gray-600">
          Fill in your details of your billing system before proceeding with
          your order.
        </p>
        <div className="sm:block sm:h-auto h-full flex flex-col justify-between">
          <div>
            {/* first sec */}
            <div className="my-5 w-full ">
              <p className="text-sm opensans-b">Card Details</p>
              <div className="bg-white opensans-b flex justify-between border-2 border-gray-200 items-center p-3 sm:p-2 rounded my-3 w-full">
                <MdCreditCard className="sm:text-xl text-3xl text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="Card Number"
                  className="text-xs mx-3 opensans-b text-gray-700 outline-none py-1 w-3/4 h-full"
                />
                <input
                  type="month"
                  required
                  placeholder="MM/YY"
                  className="text-xs mx-3 border-r-2 border-l-2 bg-white border-gray-300 text-gray-700 outline-none py-1 sm:w-36 h-full"
                />
                <input
                  onChange={(e) => setCard(e.target.value)}
                  type="text"
                  required
                  maxLength={3}
                  placeholder="CVV"
                  className="text-xs mx-3 text-gray-700 outline-none py-1 w-10 h-full"
                />
                <FaCheckCircle
                  className={
                    card == ""
                      ? "text-gray-400 sm:text-xl"
                      : "text-green-600 sm:text-xl"
                  }
                />
              </div>
            </div>
            <div className="my-5 w-full ">
              <p className="text-sm opensans-b">Full Name</p>
              <div className="bg-white flex justify-between border-2 border-gray-200 items-center p-4 sm:p-2 rounded my-3 w-3/4w-full">
                <FaUser className="text-sm text-gray-400" />
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  required
                  placeholder="John doe"
                  className="text-sm sm:text-xs mx-3 text-gray-700 outline-none sm:py-1 w-full h-full"
                />
                <FaCheckCircle
                  className={name == "" ? "text-gray-400" : "text-green-600"}
                />
              </div>
            </div>
            <div className="my-5 w-full ">
              <p className="text-sm opensans-b">Billing Information</p>
              <div className="bg-white flex justify-between border-2 border-gray-200 items-center p-4 sm:p-2 rounded my-3 w-3/4w-full">
                <MdLocationPin className="text-xl text-gray-400" />
                <input
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  required
                  placeholder="Lekki phase 1, Lagos Nigeria"
                  className="text-sm sm:text-xs mx-3 text-gray-700 outline-none py-1 w-full h-full"
                />
                <FaCheckCircle
                  className={
                    location == "" ? "text-gray-400" : "text-green-600"
                  }
                />
              </div>
            </div>
          </div>

          <div>
            {/* Calculations */}
            <div className="flex justify-between">
              <p className="text-sm font-semibold">Subtotal</p>
              <p id="sub" className="text-sm ">
                ${Total(cart)}
              </p>
            </div>
            <div className="flex my-2 justify-between">
              <p className="text-sm font-semibold">Vat (10%)</p>
              <p id="vat" className="text-sm ">
                ${Vat(cart)}
              </p>
            </div>{" "}
            <div className="flex mt-3 justify-between">
              <p className="text-sm opensans-b">Total</p>
              <p className="text-sm opensans-b">${$Total(cart)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
function Total(cart) {
  var t_price = 0;
  cart.forEach((element) => {
    t_price = t_price + element.price;
  });
  return t_price;
}
function Vat(cart) {
  const sub = Total(cart);
  const vat = (10 / 100) * sub;
  return vat;
}

function $Total(cart) {
  const p = Total(cart) + Vat(cart);
  localStorage.setItem("total", p);
  return p;
}
