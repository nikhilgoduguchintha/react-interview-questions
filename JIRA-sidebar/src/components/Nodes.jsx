import { useState } from "react";
import { FaCircle, FaCaretRight, FaCaretDown } from "react-icons/fa";

const Icons = ({ isOpen, isParentNode }) => {
  if (isParentNode) {
    return isOpen ? (
      <FaCaretDown style={{ color: "white", cursor: "pointer" }} />
    ) : (
      <FaCaretRight style={{ color: "white", cursor: "pointer" }} />
    );
  }
  return <FaCircle style={{ height: "6px", color: "white" }} />;
};

const Node = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(node)
  let isParentNode = node.children && node.children.length;
  return (
    <div>
      <li className="node" key={node.id}>
        <div className="label">
          <span onClick={() => setIsOpen((prev) => !prev)}>
            <Icons isOpen={isOpen} isParentNode={isParentNode} />
          </span>
          <a href={node.link}>{node.label}</a>
        </div>
      </li>
      <div className="node-children">
        {isParentNode && isOpen ? <div><Nodes nodes={node.children} /></div> : null}
      </div>
    </div>
  );
};

const Nodes = ({ nodes }) => {
  return (
    <div className="node-content">
      {nodes.map((node, index) => (
          <ul className="nodes" key={index}>
            <Node node={node} />
          </ul>
        ))}
    </div>
  );
};

export default Nodes;
