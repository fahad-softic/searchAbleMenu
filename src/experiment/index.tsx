import { Input, Tree } from "antd";
import React, { useState } from "react";
import TreeSelect from "../SearchTree";
interface TreeData {
  title: string;
  key: string;
  children?: TreeData[];
}

const treeDataTypes = [
  {
    title: "TreeMain",
    key: "TreeMain",
    children: [
      {
        title: "ParentLeaf",
        key: "ParentLeaf",
        children: [
          {
            title: "ChildLeaf1",
            key: "ChildLeaf1",
          },
          {
            title: "ChildLeaf2",
            key: "ChildLeaf2",
          },
        ],
      },
    ],
  },
  {
    title: "TreeMain2",
    key: "TreeMain2",
    children: [
      {
        title: "treechild22",
        key: "treechild22",
      },
      {
        title: "treechild33",
        key: "treechild33",
      },
    ],
  },
];
const Experiment = () => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<TreeData[]>([]);
  const [treeData, setTreeData] = useState<any>(treeDataTypes);

  const onExpand = (newExpandedKeys: React.Key[]) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };
  console.log("expandedKeys", expandedKeys);

  console.log("treeData", treeData);

  const searchTreeData = (
    treeData: TreeData[],
    searchTerm: string
  ): TreeData[] => {
    const results: TreeData[] = [];

    const searchRecursive = (data: TreeData[], term: string) => {
      for (const item of data) {
        console.log("item", item);

        // Check if title and key are defined before calling toLowerCase()
        const itemTitle = item.title ? item.title.toLowerCase() : "";
        const itemKey = item.key ? item.key.toLowerCase() : "";

        if (itemTitle.includes(term) || itemKey.includes(term)) {
          results.push(item);
        }

        // Recursively search in child items
        if (item.children) {
          searchRecursive(item.children, term);
        }
      }
    };

    searchRecursive(treeData, searchTerm.toLowerCase());
    return results;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    // Call the search function with the updated search term
    const results = searchTreeData(treeData, newSearchTerm);
    setSearchResults(results);
    //setTreeData(results);
  };
  console.log("searchResults", searchResults);

  return (
    <div className="flex justify-between">
      <div>
        <h4>ReactJS Ant-Design Tree Component</h4>
        <Input
          style={{ marginBottom: 8 }}
          placeholder="Search"
          onChange={handleInputChange}
        />
        <Tree
          onExpand={onExpand}
          expandedKeys={expandedKeys}
          treeData={treeData}
        />
      </div>
      <div>
        <TreeSelect />
      </div>
    </div>
  );
};

export default Experiment;
