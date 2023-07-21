import { FaGlobeAfrica } from "react-icons/fa";
import addcart from "./addcart";
import slide from "./slide";
export default ({
  one,
  two,
  reverse,
  first,
  second,
  third,
  fourth,
  icon,
  setCart,
  notify,
}) => {
  const price1 = 200;
  const price2 = 300;
  return (
    <div
      id="popular"
      className={`w-full sm:my-6 sm:mx-5 sm:flex ${
        reverse ? "flex-row-reverse" : null
      } justify-center px-2 sm:w-full`}
    >
      <div
        style={{
          background: `url(${one})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="sm:w-1/2 relative bg-gray-800 flex justify-between sm:m-0 my-4 sm:mx-6 h-60 sm:h-full bg-center bg-no-repeat rounded bg-grey-300 "
      >
        <div
          // onTouchStart={(e) => slide(e)}
          onMouseEnter={(e) => slide(e)}
          onMouseLeave={(e) => slide(e)}
          className="absolute bg-transparent  z-10 w-full h-4/5 left-0 "
        ></div>
        {/* Wider */}
        <div className="flex h-full w-3/5 flex-col justify-center">
          <div className="text-white ml-5 flex justify-center w-1/2">
            <span className="opensans-b italic sm:text-4xl">{first}</span>
          </div>
          <div className="text-white ml-5 flex items-center justify-center w-1/2">
            <span className="opensans-b mt-2 sm:text-4xl">{second}</span>
            {/* <FaGlobeAfrica className="mx-3 sm:text-xl" /> */}
            {icon}
          </div>
          {/* Details */}
        </div>
        <div
          // onMouseEnter={(e) => slide(e)}

          className="w-2/5 hidden"
        >
          <div
            id="side-pane"
            className="w-full  bg-black-a rounded-br rounded-tr h-full"
          >
            <div className="h-full flex justify-center items-center p-3">
              <div className="h-full p-4 flex flex-col justify-between">
                <div className="flex items-center sm:h-3/4">
                  <h2 className="text-white text-xs sm:text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Culpa atque autem sint sequi accusamus fuga aliquid corrupti
                    magni adipisci minima dolores at nobis, in quis amet
                    molestias beatae rem eos.
                  </h2>
                </div>
                <div className=" flex justify-between items-center">
                  <button
                    onClick={() => {
                      notify("Room Added to Cart!");
                      addcart(`${(first, second)}`, one, price1, setCart);
                    }}
                    className="opensans-b duration-200 hover:bg-gray-500 hover:text-white text-xs sm:text-sm w-3/4 bg-white py-1 sm:p-2 px-3"
                  >
                    Book Now
                  </button>
                  <p
                    id="price"
                    className="opensans-b sm:text-base text-xs text-white"
                  >
                    ${price1}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background: `url(${two})`,
          backgroundSize: "cover",
        }}
        className="bg-gray-800 flex flex-col justify-between bg-center bg-no-repeat sm:h-auto h-80 rounded w-full sm:w-1/4"
      >
        {/* Potrait */}
        <div className="sm:h-full  h-full flex flex-col bg-black-a-2 justify-around">
          <div className=" h-1/3 pl-4 flex flex-col justify-end">
            <div className="text-white flex sm:justify-center w-1/3">
              <span className="opensans-b italic sm:text-xl">{third}</span>
            </div>
            <div className="text-white flex w-2/5">
              <span className="opensans-b mt-2 sm:text-xl">{fourth}</span>
            </div>
          </div>
        </div>
        <div className="sm:h-2/6 w-full rounded-b bg-black-a flex-col flex justify-between items-center">
          <div className="w-full">
            <p className="text-white text-xs py-2 text-center px-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis reprehenderit cumque ipsa dolorum voluptate?
            </p>
          </div>
          <div className="w-full px-2 flex sm:justify-start justify-between items-center">
            <button
              onClick={() => {
                notify("Room Added to Cart!");
                addcart(`${(third, fourth)}`, two, price2, setCart);
              }}
              className="opensans-b duration-200 sm:text-base hover:bg-gray-500 hover:text-white text-xs w-3/4 bg-white p-2 sm:p-2 px-3
             my-2"
            >
              Book Now
            </button>
            <p
              id="price"
              className="opensans-b sm:text-base text-sm mr-3 sm:ml-6 text-white"
            >
              ${price2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
