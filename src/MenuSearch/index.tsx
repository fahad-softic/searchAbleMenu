import { TreeSelect, Typography } from "antd";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosHelpCircleOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

import {
  Admin,
  Authorization,
  Dashboard,
  Deposit,
  Payment,
  Reports,
  Search,
  System,
  Transaction,
  Users,
  Withdraw,
} from "../assets/Assets";

const treeData = [
  {
    key: "dashboard",
    value: "dashboard",
    title: "Dashboard",
    icon: <Dashboard />,
  },
  {
    key: "Users",
    value: "Users",
    title: "Users",
    icon: <Users />,

    children: [
      {
        key: "user",
        value: "user",
        title: "User",

        children: [
          {
            key: "Identification",
            value: "Identification",
            title: "Identification Verification",
          },
          {
            key: "Users Verification",
            value: "Users Verification",
            title: "Users Verification",
          },
          {
            key: "Something",
            value: "Something",
            title: "Something",
          },
          {
            key: "Agents",
            value: "Agents",
            title: "Agents",
            children: [
              {
                key: "Agent 1",
                value: "Agent 1",
                title: "Agent 1",
              },
              {
                key: "Company Agent",
                value: "Company Agent",
                title: "Company Agent",
              },
              {
                key: "Users List",
                value: "Users List",
                title: "Users List",
              },
              {
                key: "android app",
                value: "android app",
                title: "android app",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: "Payment",
    value: "Payment",
    title: "Payment",
    icon: <Payment />,
    children: [
      {
        key: "Bank List",
        value: "Bank List",
        title: "Bank List",
      },
      {
        key: "Mobile Bank",
        value: "Mobile Bank",
        title: "Mobile Bank",
      },
      {
        key: "Wallet",
        value: "Wallet",
        title: <a href="/wallet">Wallet</a>,
      },
      {
        key: "Crypto Currency",
        value: "Crypto Currency",
        title: "Crypto Currency",
      },
      {
        key: "Crypto Wallet",
        value: "Crypto Wallet",
        title: "Crypto Wallet",
      },
    ],
  },
  {
    value: "PAYPAL",
    title: "PAYPAL",
    key: "PAYPAL",
    icon: <Transaction />,
    children: [
      {
        key: "Netller",
        value: "Netller",
        title: "Netller",
      },
      {
        key: "Ethiriam",
        value: "Ethiriam",
        title: "Ethiriam",
      },
      {
        key: "Solana",
        value: "Solana",
        title: "Solana",
      },
    ],
  },
  {
    value: "Admin Setup",
    title: "Admin Setup",
    key: "Admin Setup",
    icon: <Admin />,
    children: [
      {
        key: "Mango",
        value: "Mango",
        title: "Mango",
      },
      {
        key: "apple",
        value: "apple",
        title: (
          <a
            href="https://www.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple
          </a>
        ),
      },
      {
        key: "Banana",
        value: "Banana",
        title: "Banana",
      },
    ],
  },
  {
    value: "Authorization",
    title: "Authorization",
    key: "Authorization",
    icon: <Authorization />,
    children: [
      {
        key: "Rolls Royes",
        value: "Rolls Royes",
        title: "Rolls Royes",
      },
      {
        key: "Audi",
        value: "Audi",
        title: (
          <a
            href="https://www.audi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Audi
          </a>
        ),
      },
      {
        key: "BMW",
        value: "BMW",
        title: "BMW",
      },
      {
        key: "Toyota",
        value: "Toyota",
        title: "Toyota",
      },
    ],
  },
  {
    key: "Deposit",
    value: "Deposit",
    title: "Deposit",
    icon: <Deposit />,
    children: [
      {
        key: "Kawasaki",
        value: "Kawasaki",
        title: "Kawasaki",
      },
      {
        key: "Yamaha",
        value: "Yamaha",
        title: "Yamaha",
      },
      {
        key: "Suzuki",
        value: "Suzuki",
        title: "Suzuki",
      },
      {
        key: "Honda",
        value: "Honda",
        title: "Honda",
      },
    ],
  },
  {
    value: "Withdraw",
    key: "Withdraw",
    title: "Withdraw",
    icon: <Withdraw />,
    children: [
      {
        key: "Bangladesh",
        value: "Bangladesh",
        title: "Bangladesh",
      },
      {
        key: "India",
        value: "India",
        title: "India",
      },
      {
        key: "Pakisthan",
        value: "Pakisthan",
        title: "Pakisthan",
      },
      {
        key: "Nepal",
        value: "Nepal",
        title: "Nepal",
      },
      {
        key: "Maldivs",
        value: "Maldivs",
        title: "Maldivs",
      },
    ],
  },
  {
    key: "System",
    value: "System",
    title: "System",
    icon: <System />,
    children: [
      {
        key: "Germany",
        value: "Germany",
        title: "Germany",
      },
      {
        key: "France",
        value: "France",
        title: "France",
      },
      {
        key: "Switzerland",
        value: "Switzerland",
        title: "Switzerland",
      },
      {
        key: "Finland",
        value: "Finland",
        title: "Finland",
      },
      {
        key: "Spain",
        value: "Spain",
        title: "Spain",
      },
    ],
  },
  {
    key: "Reports",
    value: "Reports",
    title: "Reports",
    icon: <Reports />,
    children: [
      {
        key: "Football",
        value: "Football",
        title: "Football",
      },
      {
        key: "Cricket",
        value: "Cricket",
        title: "Cricket",
      },
      {
        key: "Swim",
        value: "Swim",
        title: "Swim",
      },
      {
        key: "Rugby",
        value: "Rugby",
        title: "Rugby",
      },
      {
        key: "Cycling",
        value: "Cycling",
        title: "Cycling",
      },
    ],
  },
  {
    key: "Help",
    value: "Help",
    title: "Help",
    icon: <IoIosHelpCircleOutline className="text-[18px] mr-2" />,
  },
  {
    key: "Log Out",
    value: "Log Out",
    title: "Log Out",
    icon: <Withdraw />,
  },
];
const MenuSearch = () => {
  const [value, setValue] = useState<string>();
  const handleChange = (newValue: string) => {
    setValue(newValue);
  };
  console.log("value", value);

  return (
    <div className="w-[250px] h-fit border bg-[#0A1422] search-menu">
      <div className="py-[16px]">
        <Typography.Title className="!text-[#fff] !text-[42px] font-bold leading-[50px] !m-0">
          Localbet
        </Typography.Title>
      </div>
      <div className="tree">
        <TreeSelect
          open={true}
          value={value}
          // allowClear
          showSearch
          popupClassName="custom-select-dropdown"
          style={{ width: "248px" }}
          dropdownStyle={{
            height: 800,
            width: 248,
            overflow: "auto",
            background: "#0C1726",
          }}
          placeholder="Search..."
          treeDefaultExpandAll={false}
          suffixIcon={[
            <IoSearchOutline
              key={1}
              className="text-[#7F8592] search-icon absolute left-[-188px] text-[16px]"
            />,
            <Search key={2} />,
          ]}
          treeData={treeData}
          onSearch={handleChange}
          treeIcon={<MdDashboard />}
          switcherIcon={<IoIosArrowDown />}
          listHeight={1000}
        />
      </div>
    </div>
  );
};

export default MenuSearch;
