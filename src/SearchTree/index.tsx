import { Input, Tree } from "antd";
import React, { useState } from "react";
import gData from "../gData.tsx";
import "../index.css";

const { Search } = Input;

const dataList: any = [];
const generateList = (data) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const { key } = node;
    dataList.push({ key, title: key });
    if (node.children) {
      generateList(node.children);
    }
  }
};
generateList(gData);

const getParentKey = (key, tree) => {
  console.log("key", key);
  console.log("tree", tree);

  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some((item) => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  console.log("parentKey", parentKey);

  return parentKey;
};

const SearchTree = () => {
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const onExpand = (expandedKeys) => {
    setExpandedKeys(expandedKeys);
    setAutoExpandParent(false);
  };

  const onChange = (e) => {
    const { value } = e.target;
    console.log("value", value.toLowerCase());

    const expandedKeys = dataList
      .map((item) => {
        if (item.title.indexOf(value) > -1) {
          return getParentKey(item.key, gData);
        }
        return null;
      })
      .filter((item, i, self) => item && self.indexOf(item) === i);
    if (value) {
      setExpandedKeys(expandedKeys);
      setSearchValue(value);
      setAutoExpandParent(true);
    } else {
      setExpandedKeys([]);
      setSearchValue("");
      setAutoExpandParent(false);
    }
  };

  const filterTreeNode = (node) => {
    // console.log("node", node);

    const title = node.title.props.children[2];
    // console.log("title", title);

    const result = title.indexOf(searchValue) !== -1 ? true : false;
    // console.log("searchValue", searchValue);
    // console.log("result", result);
    return result;
  };

  const loop = (data) =>
    data.map((item) => {
      // console.log("item", item);

      const index = item.title.indexOf(searchValue);
      // console.log("index", index);

      const beforeStr = item.title.substr(0, index);
      // console.log("beforeStr", beforeStr);

      const afterStr = item.title.substr(index + searchValue.length);
      // console.log("afterStr", afterStr);

      const title =
        index > -1 ? (
          <span>
            {beforeStr}
            <span className="site-tree-search-value">{searchValue}</span>
            {afterStr}
          </span>
        ) : (
          <span>{item.title}</span>
        );
      // console.log("title", title);

      if (item.children) {
        return { title, key: item.key, children: loop(item.children) };
      }

      return {
        title,
        key: item.key,
      };
    });
  // console.log("items", items);
  // console.log("gData", gData);
  return (
    <div>
      <Search
        style={{ marginBottom: 8 }}
        placeholder="Search"
        onChange={onChange}
      />
      <Tree
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        treeData={loop(gData)}
        filterTreeNode={filterTreeNode}
      />
    </div>
  );
};

export default SearchTree;
// ReactDOM.render(<SearchTree />, document.getElementById("container"));
