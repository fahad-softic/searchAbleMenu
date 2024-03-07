import { Input } from "antd";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { DashboardIcon } from "../assets/Assets";

const menuItems = [
  { id: 1, label: "dashboard", icon: <DashboardIcon />, expand_open: false },
  { id: 2, label: "report", icon: <DashboardIcon />, expand_open: false },
  { id: 3, label: "affiliate", icon: <DashboardIcon />, expand_open: false },
  {
    id: 4,
    label: "user",
    icon: <DashboardIcon />,
    expand_open: false,
    submenu: [
      { id: 7, label: "users" },
      { id: 8, label: "setting" },
      { id: 9, label: "list" },
    ],
  },
  {
    id: 5,
    label: "agent",
    icon: <DashboardIcon />,
    expand_open: false,
    submenu: [
      { id: 10, label: "apple" },
      { id: 11, label: "banana" },
      { id: 12, label: "fruits" },
      { id: 13, label: "vegetable" },
    ],
  },
  {
    id: 6,
    label: "deposit",
    icon: <DashboardIcon />,
    expand_open: false,
    submenu: [
      { id: 14, label: "car" },
      { id: 15, label: "bus" },
      { id: 16, label: "micro" },
      { id: 17, label: "riskhway" },
      { id: 18, label: "banana" },
    ],
  },
];

const TestSidebar = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [openSubmenuId, setOpenSubmenuId] = useState<any>(null);
  const [searchItems, setSearchItems] = useState("");
  const [autoOpenSubmenus, setAutoOpenSubmenus] = useState<any>([]);

  useEffect(() => {
    if (searchItems) {
      const autoOpenIds = menuItems
        .filter(
          (menuItem) =>
            menuItem.submenu &&
            menuItem.submenu.some((subItem) =>
              subItem.label.toLowerCase().includes(searchItems.toLowerCase())
            )
        )
        .map((menuItem) => menuItem.id);

      setAutoOpenSubmenus(autoOpenIds);
    } else {
      setAutoOpenSubmenus([]);
    }
  }, [searchItems]);

  const handleOpenSubmenu = (menuId: any) => {
    if (openSubmenuId === menuId) {
      setOpenSubmenuId(null);
    } else {
      setOpenSubmenuId(menuId);
    }
  };
  console.log("autoOpenSubmenus", autoOpenSubmenus);
  const handleItemClick = (itemId: any) => {
    if (itemId?.id === 4 || itemId?.id === 5 || itemId?.id === 6) {
      setOpenSubmenuId(openSubmenuId === itemId?.id ? null : itemId?.id);
    } else {
      setSelectedItem(itemId?.id);
    }
  };

  const filteredMenuItems = menuItems.filter(
    (menuItem) =>
      menuItem.label.toLowerCase().includes(searchItems.toLowerCase()) ||
      (menuItem.submenu &&
        menuItem.submenu.some((subItem) =>
          subItem.label.toLowerCase().includes(searchItems.toLowerCase())
        ))
  );

  console.log("filteredMenuItems", searchItems);

  return (
    <div className="p-[20px]">
      <Input
        type="search"
        placeholder="Search"
        value={searchItems}
        onChange={(e) => setSearchItems(e.target.value)}
      />
      <ul>
        {filteredMenuItems.map((menu) => (
          <div key={menu.id}>
            {/*<---------- Parent Child --------->*/}
            <li
              key={menu.id}
              onClick={() => {
                handleOpenSubmenu(menu.id);
                handleItemClick(menu);
              }}
              className={`flex items-center justify-between my-1 cursor-pointer rounded sidebar-parent-child ${
                selectedItem === menu.id ? "active-sidebar-parent-child" : ""
              }`}
            >
              <a
                href={""}
                className={`flex items-center gap-2 ${
                  searchItems && "!text-[#1114f0]"
                }`}
              >
                {menu.icon} {menu.label}
              </a>

              {menu.submenu && (
                <IoIosArrowDown
                  className={`duration-300 ease-in-out ${
                    openSubmenuId === menu.id ||
                    autoOpenSubmenus.includes(menu.id)
                      ? "rotate-180"
                      : ""
                  }`}
                />
              )}
            </li>

            {/*<---------- Children Child --------->*/}
            {menu.submenu && (
              <div
                className={`sidebar-sub-child ${
                  openSubmenuId === menu.id ||
                  autoOpenSubmenus.includes(menu.id)
                    ? "block"
                    : "hidden"
                }`}
              >
                {menu.submenu
                  .filter((subItem) =>
                    subItem.label
                      .toLowerCase()
                      .includes(searchItems.toLowerCase())
                  )
                  .map((subItem: any) => (
                    <div key={subItem.id} className="sidebar-sub-item-child">
                      <p />

                      <a
                        href={""}
                        onClick={() => handleItemClick(subItem)}
                        className={`flex flex-col cursor-pointer ${
                          selectedItem === subItem.id
                            ? "active-sidebar-sub-child"
                            : searchItems
                            ? "!text-[#696cff]"
                            : ""
                        }`}
                      >
                        {subItem.label}
                      </a>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TestSidebar;
