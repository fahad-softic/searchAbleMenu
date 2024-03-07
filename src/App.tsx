// import "@ant - design/flowchart/dist/index.css";
import { DefaultOptionType } from "antd/es/select";
import React, { useState } from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";
import "./App.css";
// import AnotherSideMenu from "./anotherSideMenu";
import {
  Admin,
  Authorization,
  Dashboard,
  Deposit,
  Payment,
  Reports,
  System,
  Transaction,
  Users,
  Withdraw,
} from "./assets/Assets";
import SearchMenuEx from "./SearchMenuEx";
interface Option {
  value: string;
  label: string;
  children?: Option[];
  disabled?: boolean;
}
function App() {
  const [searchValue, setSearchValue] = useState("");
  const options: Option[] = [
    {
      value: "zhejiang",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
          children: [
            {
              value: "xihu",
              label: "West Lake",
            },
            {
              value: "xiasha",
              label: "Xia Sha",
              disabled: true,
            },
          ],
        },
      ],
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
          children: [
            {
              value: "zhonghuamen",
              label: "Zhong Hua men",
            },
          ],
        },
      ],
    },
    {
      value: "bd",
      label: "bd",
      children: [
        {
          value: "dhaka",
          label: "dhaka",
          children: [
            {
              value: "gulshan",
              label: "gulshan",
            },
            {
              value: "banani",
              label: "banani",
            },
          ],
        },
      ],
    },
    {
      value: "ind",
      label: "india",
      children: [
        {
          value: "momd",
          label: "mombai",
          children: [
            {
              value: "mombai1",
              label: "mombai1",
            },
          ],
        },
      ],
    },
  ];
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
  const onChange = (value: string[], selectedOptions: Option[]) => {
    console.log("select", value, selectedOptions);
  };

  const filter = (inputValue: string, path: DefaultOptionType[]) =>
    path.some(
      (option) =>
        (option.label as string)
          .toLowerCase()
          .indexOf(inputValue.toLowerCase()) > -1
    );
  const handleInputChange = (e) => {
    // Update the state on each input change
    setSearchValue(e.target.value);
  };
  const handleInputBlur = () => {
    // Update the state when the input field loses focus (on blur)
    console.log("Finished typing. Input value:", searchValue);
  };
  // console.log("searchValue", searchValue);

  return (
    <>
      {/* <TreeSelect /> */}
      {/* <Test /> */}
      {/* <Experiment /> */}
      {/* <SearchTree /> */}
      {/* <Charts /> */}
      {/* <MenuSearch /> */}
      {/* <div className="flex">
        <AnotherSideMenu /> */}
      <SearchMenuEx />
      {/* </div> */}
      {/* <TestSidebar /> */}
      {/* <SidebarExercise treeData={treeData} /> */}
      {/* <CollapseEx /> */}
      {/* <SelectDeselect /> */}
      {/* <ExportTable /> */}
      {/* <Charts /> */}
      {/* <TestModal /> */}
      {/* <ClearFormModal /> */}
      {/* <AntdChartEx /> */}
      {/* <InfiniteHorizontalScrolling /> */}
      {/* <InfiniteScroll /> */}
    </>
  );
}

export default App;
