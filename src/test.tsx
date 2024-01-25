import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { MenuProps, Tree } from "antd";
import React from "react";

const Test = () => {
  interface MenuItem {
    label: string;
    key: string;
    icon?: JSX.Element | null;
    items?: MenuItem[];
    type?: string;
  }

  const getItem = (
    label: string,
    key: string,
    icon?: JSX.Element | null,
    items?: MenuItem[],
    type?: string
  ): MenuItem => ({
    label,
    key,
    icon,
    items,
    type,
  });

  const items: MenuProps["items"] = [
    getItem("Navigation One", "sub1", <MailOutlined />, [
      getItem(
        "Item 1",
        "g1",
        null,
        [getItem("Option 1", "1"), getItem("Option 2", "2")],
        "group"
      ),
      getItem(
        "Item 2",
        "g2",
        null,
        [getItem("Option 3", "3"), getItem("Option 4", "4")],
        "group"
      ),
    ]),

    getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]),

    { type: "divider" },

    getItem("Navigation Three", "sub4", <SettingOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),

    getItem(
      "Group",
      "grp",
      null,
      [getItem("Option 13", "13"), getItem("Option 14", "14")],
      "group"
    ),
  ];

  const searchItems = (items: MenuItem[], searchTerm: string): MenuItem[] => {
    const results: MenuItem[] = [];

    const searchRecursive = (items: MenuItem[], term: string) => {
      for (const item of items) {
        // Check if label and key are defined before calling toLowerCase()
        const itemLabel = item.label ? item.label.toLowerCase() : "";
        const itemKey = item.key ? item.key.toLowerCase() : "";

        if (itemLabel.includes(term) || itemKey.includes(term)) {
          results.push(item);
        }

        // Recursively search in sub-items
        if (item.items) {
          searchRecursive(item.items, term);
        }
      }
    };

    searchRecursive(items, searchTerm.toLowerCase());
    return results;
  };

  // Example usage:
  const searchTerm = "Option 5";
  const searchResults = searchItems(items, searchTerm);

  console.log("Search results:", searchResults);

  return (
    <div>
      <Tree treeData={items} />
    </div>
  );
};

export default Test;
