import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import React from "react";
// import "./index.css";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "This is panel header 1",
    children: (
      <ul>
        <li>school</li>
        <li>college</li>
        <li>university</li>
      </ul>
    ),
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: (
      <ul>
        <li>football</li>
        <li>cricket</li>
        <li>badminton</li>
      </ul>
    ),
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: (
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    ),
  },
];

const CollapseEx: React.FC = () => <Collapse accordion items={items} />;

export default CollapseEx;
