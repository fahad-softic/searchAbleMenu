export const menuData = [
  {
    title: "Dashboard",
    icon: "++",
    link: "/",
  },
  {
    title: "Users",
    icon: "++",
    submenu: [
      { title: "List Users", link: "/users/list" },
      { title: "Create User", link: "/users/create" },
    ],
  },
  {
    title: "Cars",
    icon: "++",
    submenu: [
      { title: "BMW", link: "/cars/bmw" },
      { title: "Audi", link: "/cars/audi" },
    ],
  },
  {
    title: "Settings",
    icon: "++",
    link: "/settings",
  },
];
