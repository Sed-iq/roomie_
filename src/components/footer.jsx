import { FaBroom, FaDiscord, FaFacebook, FaTwitter } from "react-icons/fa";
import { MdCopyright, MdEmail } from "react-icons/md";

export default () => {
  return (
    <div className="p-4 flex text-gray-500 border-t-2 border-gray-200 flex-col my-3 items-center">
      <div className="opensans text-center sm:block hidden font-semibold text-sm w-3/4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium,
        ex iure? Consequatur error quibusdam ipsa officiis quisquam quas odio
        necessitatibus corrupti, voluptas magni eius laboriosam tempora nam
        pariatur alias! Sunt.
      </div>
      <div className="flex sm:mt-7 w-full justify-between sm:px-4">
        <div className="flex items-center">
          <FaBroom className="sm:text-3xl text-slate-800" />
          <p className="px-2 sm:text-base text-sm opensans-b">Roomie</p>
        </div>
        <div className="flex items-center">
          <MdCopyright className="mr-1" />
          <p className="sm:text-sm text-xs font-semibold">
            2023 Roomie. All rights reserved
          </p>
        </div>
        <div className="sm:flex hidden items-center">
          {/* Socials */}
          <FaFacebook className="text-xl text-blue-600 mx-3" />
          <FaTwitter className="text-xl text-blue-600 mx-3" />
          <MdEmail className="text-xl text-slate-600 mx-3" />
          <FaDiscord className="text-xl text-blue-800 mx-3" />
        </div>
      </div>
    </div>
  );
};
