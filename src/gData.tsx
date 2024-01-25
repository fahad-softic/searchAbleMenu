const gData = [
  {
    value: "dashboard",
    title: "Dashboard",
  },
  {
    value: "Users",
    title: "Users",
    children: [
      {
        value: "user",
        title: "User",
        children: [
          {
            value: "Identification",
            title: "Identification Verification",
          },
          {
            value: "Users Verification",
            title: "Users Verification",
          },
          {
            value: "Something",
            title: "Something",
          },
          {
            value: "Agents",
            title: "Agents",
            children: [
              {
                value: "Agent 1",
                title: "Agent 1",
              },
              {
                value: "Company Agent",
                title: "Company Agent",
              },
              {
                value: "Users List",
                title: "Users List",
              },
              {
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
    value: "Payment",
    title: "Payment",
    children: [
      {
        value: "Bank List",
        title: "Bank List",
      },
      {
        value: "Mobile Bank",
        title: "Mobile Bank",
      },
      {
        value: "Wallet",
        title: "Wallet",
      },
      {
        value: "Crypto Currency",
        title: "Crypto Currency",
      },
      {
        value: "Crypto Wallet",
        title: "Crypto Wallet",
      },
    ],
  },
];

// const gData = [
//   {
//     key: "dashboard",
//     title: "Dashboard",
//   },
//   {
//     key: "Users",
//     title: "Users",
//     children: [
//       {
//         key: "user",
//         title: "User",
//         children: [
//           {
//             key: "Identification",
//             title: "Identification Verification",
//           },
//           {
//             key: "Users Verification",
//             title: "Users Verification",
//           },
//           {
//             key: "Something",
//             title: "Something",
//           },
//           {
//             key: "Agents",
//             title: "Agents",
//             children: [
//               {
//                 key: "Agent 1",
//                 title: "Agent 1",
//               },
//               {
//                 key: "Company Agent",
//                 title: "Company Agent",
//               },
//               {
//                 key: "Users List",
//                 title: "Users List",
//               },
//               {
//                 key: "android app",
//                 title: "android app",
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     key: "Payment",
//     title: "Payment",
//     children: [
//       {
//         key: "Bank List",
//         title: "Bank List",
//       },
//       {
//         key: "Mobile Bank",
//         title: "Mobile Bank",
//       },
//       {
//         key: "Wallet",
//         title: "Wallet",
//       },
//       {
//         key: "Crypto Currency",
//         title: "Crypto Currency",
//       },
//       {
//         key: "Crypto Wallet",
//         title: "Crypto Wallet",
//       },
//     ],
//   },
// ];
//console.log("gData", gData);
const searchParentNode = (opt: any) => {
  const value = opt;
  // console.log("value", value);
  const findNode = gData.map((item: any) => {
    if (item?.title === value) {
      // console.log("match item", item);
      // if (item?.children) {
      //   console.log("item have children");
      // }
    } else if (item?.children) {
      // console.log("search for children");
      const childArr = item?.children.map((item) => {
        if (item?.title === value) {
          //console.log("item", item);
        }
      });
    }
    // if (item?.children) {
    //   console.log("item have children");
    // }
    //console.log("item", item);
  });
};
searchParentNode("Wallet");

export default gData;
