// App.jsx
import React, { useState } from "react";
import MyQRCodesContent from "./MyQRCodesContent";

const App = () => {
  const [open, setOpen] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState(2);

  const Menus = [
    { title: "Profile", src: "User", content: "Dashboard Content" },
    { title: "Statistic", src: "Chat", content: "Inbox Content" },
    { title: "My QR Codes", src: "User", gap: true, content: <MyQRCodesContent onFolderCreate={() => {}} /> },
    { title: "Schedule", src: "Calendar", content: "Schedule Content" },
    { title: "User Domain", src: "Search", content: "Search Content" },
    { title: "Import From CSV", src: "Chart", content: "Analytics Content" },
    { title: "Archive QR Codes", src: "Folder", gap: true, content: "Files Content" },
    { title: "Setting", src: "Setting", content: "Setting Content" },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-dark-purple h-full overflow-y-auto p-5 pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-200"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo3.png"
            className={`cursor-pointer duration-500 ${
              open ? "rotate-[360deg] h-11 w-11" : "h-8 w-8"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            QREACTIVE
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === selectedMenuItem && "bg-light-white"
              } `}
              onClick={() => setSelectedMenuItem(index)}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 p-7 overflow-y-auto">
        {Menus[selectedMenuItem].content}
      </div>
    </div>
  );
};

export default App;