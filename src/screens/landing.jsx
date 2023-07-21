import Nav from "../components/nav";
import "../assets/design.css";
import Keystone from "../assets/keystone-hotels.jpg";
import empire_state from "../assets/empire_state.jpg";
import harbour_bay from "../assets/harbour_bay.jpg";
import one from "../assets/christopher-jolly-GqbU78bdJFM-unsplash.jpg";
import two from "../assets/eddi-aguirre-ZAVHbpOn4Jk-unsplash.jpg";
import three from "../assets/pexels-roberto-nickson-2417842.jpg";
import four from "../assets/resort.jpg";
import five from "../assets/pexels-pixabay-271624.jpg";
import six from "../assets/pexels-pixabay-279746.jpg";
import {
  MdDriveEta,
  MdKitchen,
  MdLocationCity,
  MdLocationPin,
  MdMail,
  MdOutlineEmail,
  MdPhone,
  MdThumbUp,
} from "react-icons/md";
import {
  FaBroom,
  FaDiscord,
  FaFacebook,
  FaGlobeAsia,
  FaHotel,
  FaTwitter,
  FaWhatsapp,
  FaWifi,
} from "react-icons/fa";
import Card from "../components/card";
import Service_card from "../components/service_card";
import Two_card from "../components/two_card";
import Footer from "../components/footer";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
export default ({ show }) => {
  const notify = (message) =>
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 300,
      theme: "dark",
      closeOnClick: true,
      className: "text-sm",
      hideProgressBar: true,
      closeButton: false,
    });
  const $cart = JSON.parse(localStorage.getItem("cart_data"));
  const [cart, setCart] = useState($cart.length);
  return (
    <div className="relative w-full  overflow-x-hidden">
      <Nav cart={cart} show={show} />
      <div id="banner" className="flex justify-center items-center">
        <div className="text-white h-full w-full">
          <div className="flex opensans flex-col bg-black-a h-full w-full justify-center items-center">
            <ToastContainer />
            <p className="sm:text-4xl sm:text-start text-center px-2 text-2xl">
              <span className="font-bold sm:text-start text-center opensans-b">
                UP TO 60% OFF{" "}
              </span>
              ADVENTURE TRAVEL
            </p>
            <p className="mt-4 sm:text-xl opensans-b font-semibold">
              JOIN OVER 40,000 MEMBERS
            </p>
            <p className="sm:my-2 mb-10 sm:w-1/2 w-3/4 py-1  sm:text-base text-xs text-center font-semibold">
              Book hotel rooms across the globe, at the comfort of your home.
              Get access to exclusive members only deals by email{" "}
              <span className="text-orange-500">- it's free.</span>
            </p>
            <div className="bg-white animate__animated animate__fadeIn animate__fast w-5/6 sm:m-0 sm:w-3/4 rounded-full px-1 flex justify-between">
              <div className="flex w-5/6 items-center">
                <MdMail className="text-gray-600 text-xl m-3 sm:m-4" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className=" text-black text-xs sm:text-sm px-2 outline-none h-full w-3/4 "
                />
              </div>
              <div className="py-1 sm:w-3/12 animate__animated animate__bounceInRight animate__slow w-40">
                <button className="w-full outline-none duration-200 hover:bg-orange-800 hover:scale-95 rounded-full  h-full flex justify-center items-center font-bold text-sm bg-orange-600 ">
                  <p className="sm:font-bold opensans-b text-xs">SUBSCRIBE</p>
                  <FaBroom className="ml-2 text-xs sm:text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-black my-4 font-bold ">
        <p className="text-center text-xl text-slate-800 my-5">Recent Rooms</p>
        <div className="sm:flex justify-center">
          <div className="mx-3">
            <Card
              setCart={setCart}
              name={"Keystone Hotels"}
              details={"Perfect resort with lush comfort, you'll ever find"}
              price={200}
              notify={notify}
              room_pic={Keystone}
            />
          </div>
          <div className="mx-3">
            <Card
              setCart={setCart}
              name={"Habour bay Hotels"}
              details={"Great view, with quaility resources for your pleasure"}
              price={150}
              notify={notify}
              room_pic={harbour_bay}
            />
          </div>{" "}
          <div className="mx-3">
            <Card
              setCart={setCart}
              name={"Empire State"}
              details={"Close to the big apple, beautiful resorts."}
              price={500}
              notify={notify}
              room_pic={empire_state}
            />
          </div>
        </div>
      </div>
      {/* Services */}
      <div id="services" className=" my-4 w-full">
        <div className="bg-black-a w-full flex flex-col justify-center items-center p-3 h-full">
          <p className="sm:text-4xl text-xl sm:m-0 my-8 sm:h-2/5 mt-3 text-center font-semibold text-white opensans-b">
            Services we offer
          </p>
          <div className="sm:h-1/2 flex sm:flex-row flex-col justify-between sm:w-4/5">
            <Service_card
              name={"Reliable Internet"}
              icon={<FaWifi className="text-sm mx-2" />}
            />
            <Service_card
              name={"Quality Resources"}
              icon={<MdKitchen className="text-sm mx-2" />}
            />{" "}
            <Service_card
              name={"Order anywhere in town"}
              icon={<MdDriveEta className="text-sm mx-2" />}
            />
          </div>
        </div>
      </div>

      {/* Popular */}
      <div className="sm:my-10">
        <p className="text-center text-xl mb-8 opensans-b sm:text-3xl text-slate-800">
          Popular Spots
        </p>
        <div>
          <Two_card
            one={one}
            two={two}
            first={"Explore"}
            second={"Africa"}
            third={"Uncover"}
            fourth={"Nature"}
            icon={<FaGlobeAsia className="mx-2 text-xl" />}
            reverse={false}
            setCart={setCart}
            notify={notify}
          />
        </div>
        <div>
          <Two_card
            one={four}
            two={three}
            first={"Adentures"}
            second={"Here"}
            third={"Dive into"}
            fourth={"Comfort"}
            icon={<FaHotel className="mx-2 text-xl" />}
            reverse={true}
            setCart={setCart}
            notify={notify}
          />
        </div>
        <div>
          <Two_card
            one={five}
            two={six}
            first={"Discover"}
            second={"Paradise"}
            third={"Experience"}
            fourth={"Pleasure"}
            icon={<MdLocationCity className="mx-2 text-xl" />}
            reverse={false}
            setCart={setCart}
            notify={notify}
          />
        </div>
      </div>

      {/* Contacts */}
      <div className="bg-gray-100 my-6 sm:p-0 px-3 flex justify-between items-center h-36 sm:h-44">
        <div className=" hidden sm:flex w-1/5 justify-center items-center h-1/2 border-r-2 border-r-gray-300 ">
          <MdLocationPin className="text-xl animate__animated animate__bounce animate__infinite text-yellow-500 " />
          <div className=" flex flex-col mx-4">
            <div className="text-sm opensans-b">
              <p>FIND US</p>
            </div>
            <div className="text-xs text-slate-7003">Address Line</div>
            <div className="text-xs text-slate-700">London, UK</div>
          </div>
        </div>
        <div className="flex sm:w-1/5 justify-center items-center h-full sm:h-1/2 border-r-2 border-r-gray-300 ">
          <MdPhone className="text-xl animate__animated animate__tada animate__infinite text-yellow-500 " />
          <div className=" flex flex-col mx-4">
            <div className="text-sm opensans-b">
              <p>CALL US</p>
            </div>
            <div className="text-xs text-slate-700">+234 811 572 4750</div>
          </div>
        </div>
        <div className="flex sm:w-1/5 justify-center items-center h-full sm:h-1/2 border-r-2 border-r-gray-300 ">
          <MdOutlineEmail className="text-xl animate__animated animate__wobble animate__infinite text-yellow-500 " />
          <div className=" flex flex-col mx-4">
            <div className="text-sm opensans-b">
              <p>EMAIL US</p>
            </div>
            <div className="text-xs text-slate-700">support@roomie.com</div>
          </div>
        </div>
        <div className="flex sm:w-1/5 justify-center items-center h-full sm:h-1/2 sm:border-r-2 border-r-gray-300 ">
          <MdThumbUp className="text-xl animate__animated animate__heartBeat animate__fast animate__infinite text-yellow-500 " />
          <div className=" sm:flex-row flex-col flex sm:h-auto h-full justify-between items-center mx-4">
            <div className="text-sm sm:h-auto sm:block flex items-end h-1/2 opensans-b">
              <p className="sm:text-sm text-xs">FOLLOW US</p>
            </div>
            <div className="text-xs sm:w-auto w-full items-center h-auto overflow-y-hidden sm:items-end my-2 flex flex-col text-slate-700">
              <div className="flex sm:m-0 m-2 sm:p-1">
                <FaFacebook className="text-blue-500 animate__animated animate__wobble animate__infinite mx-2 sm:text-lg" />
                <FaTwitter className="text-blue-500 animate__animated animate__wobble animate__infinite animate__slow sm:text-lg" />
              </div>
              <div className="flex sm:m-0 m-2 sm:p-1">
                <FaDiscord className="text-slate-500 animate__animated animate__fast animate__wobble animate__infinite mx-2 sm:text-lg" />
                <FaWhatsapp className="text-green-500 animate__animated animate__faster animate__wobble animate__infinite sm:text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
