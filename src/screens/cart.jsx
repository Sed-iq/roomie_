import { useEffect, useState } from "react";
import { FaArrowLeft, FaBroom, FaCheckCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdClose, MdShoppingCart } from "react-icons/md";
import $ from "jquery";
import Cart from "../components/cart";
import SideScreen from "./sideScreen";
import Mobile_switcher from "./mobile_switcher";
import { ToastContainer, toast } from "react-toastify";
export default () => {
  const cart = JSON.parse(localStorage.getItem("cart_data"));
  const [items, setCart] = useState(cart);
  const [information, setInfo] = useState("text-gray-300");
  const [payment, setpayment] = useState("text-gray-300");
  const [screen, setScreen] = useState(1);
  const [mobileScreen, setMobile] = useState(0);
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const notify = (message) =>
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 300,
      theme: "dark",
      closeOnClick: true,
      className: "text-sm",
      hideProgressBar: true,
      closeButton: false,
    });
  // const items = JSON.parse(localStorage.getItem("cart_data"));
  const navigate = useNavigate();
  return (
    <div className="h-screen border- w-full sm:overflow-x-auto overflow-y-hidden flex flex-col justify-between">
      {/* Nav */}
      <div className="w-full sm:flex hidden justify-between items-center p-4 border-b-2  border-gray-200">
        <div className="flex w-1/2 items-center">
          <Link
            to={"/"}
            className="flex border-r-2 outline-none border-gray-300 items-center sm:px-5"
          >
            <FaBroom className="mx-2" />
            <p className="opensans-b text-slate-700">Roomie.</p>
          </Link>
          <div>
            <p className="mx-3 text-xs opensans-b text-gray-500">
              Order Overview
            </p>
          </div>
        </div>
        <div className="flex sm:mx-14 justify-end items-center w-1/2">
          {/* Completing steps */}
          <div className="w-3/4 flex justify-between items-center">
            <div className="flex items-center">
              <FaCheckCircle className={`${information}  text-lg`} />
              <p
                className={`${information} opensans font-semibold text-xs text-gray-400 mx-2`}
              >
                Information
              </p>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className={`${payment} text-lg`} />
              <p className={`${payment} opensans font-semibold text-xs mx-2`}>
                Payment Details
              </p>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className={`text-gray-300 text-lg`} />
              <p
                className={`opensans font-semibold text-xs text-gray-300 mx-2`}
              >
                Checkout
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Checkout dashboard */}
      <div className="w-full sm:flex hidden justify-center items-center h-full">
        <div className="w-1/2 4 hidden sm:flex flex-col items-center justify-center h-full p-3 bg-white">
          <div className="flex p-3 flex-col h-full w-3/4">
            <div>
              <p className="text-lg text-slate-900 opensans-b">Rooms Booked</p>
              <p className="text-sm mt-2 text-slate-600 opensans">
                Check your booked rooms and confirm details before proceeding.
              </p>
            </div>
            <div
              id="cart_list"
              className="border-2 my-5 border-gray-300 p-3 rounded w-full overflow-y-auto"
            >
              {/* Shopping cart */}
              {items == "" ? (
                <h2 className="text-xs text-center text-gray-600">
                  There's nothing in your cart, please add something before
                  checkout.
                </h2>
              ) : (
                items.map((room, index) => {
                  return (
                    <Cart
                      setCart={setCart}
                      key={index}
                      id={room.id}
                      name={room.name}
                      img={room.img}
                      price={room.price}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 hidden sm:flex flex-col justify-center items-center h-full bg-slate-100">
          <div className=" w-4/5 flex justify-center h-full p-2 py-5">
            <SideScreen
              email={email}
              setEmail={setEmail}
              screen={screen}
              infoIco={setInfo}
              cart={items}
              navigate={navigate}
              setpaymentab={setpayment}
            />
          </div>
          <div className=" w-4/5 flex justify-center items-center h-2/5">
            {screen > 1 ? (
              <button
                onClick={() => back(screen, setScreen, setpayment)}
                className="mx-2 border-2 bg-black border-gray-600"
              >
                <FaArrowLeft className="text-white m-2" />
              </button>
            ) : null}
            <button
              disabled={items == "" ? true : false}
              onClick={() =>
                Slide(screen, setScreen, setInfo, setpayment, email, notify)
              }
              className="bg-black flex justify-center items-center text-white sm:text-sm opensans-b hover:bg-gray-900 duration-150 w-full sm:h-10"
            >
              Next
              {items == "" ? (
                <MdClose className="mt-1 mx-1 text-red-600" />
              ) : null}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="w-full px-4 border-b-2 py-3 sm:hidden">
        <div className="flex px-3 items-center h-full justify-between">
          <Link
            to={"/"}
            className="flex rounded border-slate-200 border-2 items-center"
          >
            <FaBroom className="text-2xl text-slate-700 m-3" />
          </Link>
          <p className="px-2 text-base opensans-b text-gray-600">
            Order Overview
          </p>
          <div className="mx-3 flex justify-center items-center h-full p-2">
            <MdShoppingCart className="text-2xl text-slate-600" />
          </div>
        </div>
      </div>
      <div className="sm:hidden flex h-full w-full flex-col justify-between">
        <div className={` ${mobileScreen == 0 ? "h-4/5" : "h-full"}`}>
          {mobileScreen == 0 ? (
            <div id="cart-list" className="p-3 h-full w-full">
              {items.map((room, index) => {
                return (
                  <div key={index} className="py-3">
                    <Cart
                      id={room.id}
                      img={room.img}
                      name={room.name}
                      price={room.price}
                      setCart={setCart}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <Mobile_switcher
              email={email}
              setEmail={setEmail}
              cart={items}
              infoIco={setInfo}
              screen={mobileScreen}
              setpaymentab={setpayment}
            />
          )}
        </div>

        <div
          className={` flex ${
            mobileScreen == 0 ? "items-start h-40" : "items-center h-20 "
          }`}
        >
          <div className="w-full  flex justify-between">
            <div className="flex w-1/2 mx-4 items-center">
              <button
                id="back-btn"
                onClick={() =>
                  mobileSlide(mobileScreen, setMobile, navigate, "back")
                }
                className="w-full p-3 opensans-b rounded-sm border-2 border-black"
              >
                Back
              </button>
            </div>
            <div className="flex  w-1/2 items-center">
              <button
                disabled={items == "" ? true : false}
                onClick={() =>
                  mobileSlide(
                    mobileScreen,
                    setMobile,
                    navigate,
                    "forward",
                    notify,
                    email
                  )
                }
                className={`${
                  items == "" ? "bg-gray-500" : "bg-black"
                } w-full mx-3 text-white opensans-b p-3 rounded-sm border-2 border-black`}
              >
                {mobileScreen == 0 ? "Checkout" : "Proceed"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
function back(screen, setScreen, setPayment) {
  // Slides to the previous screen
  switch (screen) {
    case 2:
      $("#payment").fadeOut(200, () => {
        setScreen(1);
        setPayment("text-gray-300");
      });
      break;
    case 3:
      $("#checkout_modal").fadeOut(200, () => {
        setScreen(2);
      });
      break;
    default:
      break;
  }
}
function mobileSlide(screen, setScreen, navigate, fxn, notify, email) {
  if (fxn == "back") {
    // bACK
    switch (screen) {
      case 0:
        navigate("/");
        break;
      case 1:
        $("#information").fadeOut(200, () => {
          setScreen(0);
        });
        break;
      case 2:
        setScreen(1);
        break;
      case 3:
        $("#checkout_modal").fadeOut(200, () => {
          setScreen(2);
        });
        break;
      default:
        break;
    }
  } else if (fxn == "forward") {
    switch (screen) {
      case 0:
        $("#cart-list").fadeOut(200, () => {
          setScreen(1);
        });
        break;
      case 1:
        if (email == null || email == "") {
          notify("No email inputted!");
        } else {
          $("#information").fadeOut(200, () => {
            setScreen(2);
            localStorage.setItem("email", email);
          });
        }
        break;
      case 2:
        setScreen(3);
        break;
      default:
        break;
    }
  }
}
function Slide(screen, setScreen, setinfo, setPayment, email, notify) {
  // Slides to the next screen
  switch (screen) {
    case 1:
      if (email == null || email == "") {
        notify("No email inputted!");
      } else {
        $("#information").fadeOut(200, () => {
          setScreen(2);
          localStorage.setItem("email", email);
          setinfo("text-green-500");
        });
      }
      break;
    case 2:
      $("#payment").fadeOut(200, () => {
        setScreen(3);
        setPayment("text-green-500");
      });
      break;
    default:
      break;
  }
}
