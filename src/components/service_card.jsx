export default ({ name, icon }) => {
  return (
    <div className="text-white sm:m-0 mb-2 sm:block w-full sm:w-1/3">
      <div className="sm:block flex justify-between ">
        <h2 className="sm:text-xl text-sm flex items-center">
          {icon}
          <span className="opensans-b ">{name}</span>
        </h2>
        <p className="my-2 text-sm w-3/5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
          quasi!
        </p>
      </div>
    </div>
  );
};
