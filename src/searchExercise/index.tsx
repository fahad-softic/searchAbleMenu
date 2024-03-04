"use client";
import React, { useState } from "react";

const SidebarExercise = ({ treeData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedMenu, setExpandedMenu] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setExpandedMenu(null); // Reset expanded menu when searching
  };

  const handleItemClick = (key) => {
    setExpandedMenu(expandedMenu === key ? null : key);
  };

  const searchTreeData = (treeData, searchTerm) => {
    console.log("searchTerm", searchTerm);

    for (const item of treeData) {
      if (item.children) {
        const foundInChildren = searchTreeData(item.children, searchTerm);
        if (foundInChildren) {
          return foundInChildren;
        }
      }

      if (
        item.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return item;
      }
    }
    return null; // Item not found
  };

  const searchResult = searchTerm ? searchTreeData(treeData, searchTerm) : null;
  return (
    <div className="sidebar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
      />
      <ul>
        {treeData.map((item) => (
          <li key={item.key}>
            <div
              className={`menu-item ${
                expandedMenu === item.key ? "expanded" : ""
              }`}
              onClick={() => handleItemClick(item.key)}
            >
              {item.title}
            </div>
            {item.children && expandedMenu === item.key && (
              <ul>
                {item.children.map((child) => (
                  <li key={child.key}>{child.title}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {searchTerm && searchResult && (
        <div>
          <h3>Search Result:</h3>
          <div>{searchResult.title}</div>
        </div>
      )}
    </div>
  );
};

export default SidebarExercise;
