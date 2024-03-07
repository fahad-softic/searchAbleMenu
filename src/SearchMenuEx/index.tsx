"use client";
import React, { useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { FaCarOn } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline, IoSettings } from "react-icons/io5";
import { MdOutlineElectricBike } from "react-icons/md";
import { DashboardIcon } from "../assets/Assets";

// import menuData from "./menuData";
const menuData = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/",
  },
  {
    title: "Users",
    icon: <FaUserFriends />,
    submenu: [
      { title: "List Users", link: "/users/list" },
      { title: "Create User", link: "/users/create" },
      { title: "Honda", link: "/cars/honda" },
    ],
  },
  {
    title: "Cars",
    icon: <FaCarOn />,
    submenu: [
      { title: "BMW", link: "/cars/bmw" },
      { title: "Audi", link: "/cars/audi" },
      { title: "Honda", link: "/cars/honda" },
    ],
  },
  {
    title: "Bikes",
    icon: <MdOutlineElectricBike />,
    submenu: [
      { title: "Honda", link: "/bike/honda" },
      { title: "Suzuki", link: "/bike/suzuki" },
    ],
  },
  {
    title: "Country",
    icon: <MdOutlineElectricBike />,
    submenu: [
      { title: "Usa", link: "/bike/usa" },
      { title: "Germany", link: "/bike/germany" },
    ],
  },
  {
    title: "Settings",
    icon: <IoSettings />,
    link: "/settings",
  },
];
const SearchMenuEx = () => {
  const [isOpen, setIsOpen] = useState(-1);
  const [searchTerm, setSearchTerm] = useState<any>("");

  useEffect(() => {
    setIsOpen(-1);
  }, []);

  const toggleSubMenu = (index) => {
    if (!isOpen || isOpen !== index) {
      setIsOpen(index);
    } else {
      setIsOpen(-1);
    }
  };

  const filteredMenuItems = menuData.filter((item, index) => {
    return (
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.submenu &&
        item.submenu.some((subItem) =>
          subItem.title.toLowerCase().includes(searchTerm.toLowerCase())
        ))
    );
  });

  const activeClassThreshold = Math.min(filteredMenuItems.length, 4);
  console.log("filteredMenuItems", filteredMenuItems);

  return (
    <div className="sidebar">
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IoSearchOutline />
      </div>

      {filteredMenuItems.map((item, index) => (
        <div key={index} className="menu-item">
          {item.icon}
          <span onClick={() => toggleSubMenu(index)}>
            {item.title}
            {item.submenu && <IoIosArrowDown />}
          </span>
          {item.submenu && (
            <ul
              className={`submenu  ${
                isOpen === index
                  ? "active"
                  : filteredMenuItems.length <= activeClassThreshold
                  ? "active"
                  : ""
              }`}
            >
              {item.submenu.map((subItem) => (
                <li key={subItem.title}>
                  <a href={subItem.link}>{subItem.title}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default SearchMenuEx;
