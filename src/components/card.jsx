import "./../assets/card.css";
import addcart from "./addcart";

export default ({ name, details, price, room_pic, setCart, notify }) => {
  return (
    <div>
      <main className="container">
        <section className="card flex flex-col justify-between text-black">
          <div className=" bg-black w-full rounded h-60 sm:m-0 my-3 sm:h-64">
            <img
              id="img"
              src={room_pic}
              loading="lazy"
              alt=""
              className="w-full h-full rounded"
            />
          </div>
          <div className="my-2 flex flex-col justify-between">
            <div className="product-info">
              <h2 id="name" className=" ">
                {name}
              </h2>
              <p id="details" className="details p-1">
                {details}
              </p>
            </div>
            <div className="btn">
              <button
                onClick={() => {
                  addcart(name, room_pic, price, setCart);
                  notify("Room Added to Cart !");
                }}
                className=" p-2 px-4 duration-100 hover:bg-gray-800 text-sm opensans-b w-3/4 bg-black text-white"
              >
                Book Now
              </button>

              <div id="price" className="price text-sm font-bold">
                ${price}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
