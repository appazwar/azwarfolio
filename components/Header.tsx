import React from "react";

function Header() {
  return (
    <nav className="bg-[#050505] ">
      <div className="flex justify-between items-center p-3 sm:ml-4 sm:mr-4">
        <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">azwar app</div>
        <div className="hidden sm:block">
          <div className="flex gap-4 text-gray-300 font-bold ">
            <div className="hover:text-gray-100 hover:cursor-pointer">
              RECENT WORK
            </div>
            <div className="hover:text-gray-100 hover:cursor-pointer">
              CONTACT
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
