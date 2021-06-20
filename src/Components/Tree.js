import React, { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { BiCaretRightCircle } from "react-icons/bi";

import "./Tree.css";

const Tree = ({ data }) => {
  return (
    <div>
      <ul className="d-flex d-tree-container flex-column">
        {data.map((tree) => (
          <TreeNode node={tree} />
        ))}
      </ul>
    </div>
  );
};

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisible] = useState(false);

  const hasChild = node.children ? true : false;

  return (
    <li className="d-tree-node border-0">
      <div className="d-flex" onClick={(e) => setChildVisible((v) => !v)}>
        {hasChild && (
          <div
            className={`d-inline d-tree-toggler ${
              childVisible ? "active" : " "
            }`}
          >
            <BiCaretRightCircle />
          </div>
        )}

        <div className="col d-tree-head">
          <i className={`mr-1 ${node.icon}`}>
            <FaCaretRight />
          </i>
          {node.label}
        </div>
      </div>

      {/* children */}
      {hasChild && childVisible && (
        <div className="d-tree-content">
          <ul className="d-flex d-tree-container flex-column">
            <Tree data={node.children} />
          </ul>
        </div>
      )}
    </li>
  );
};

export default Tree;
