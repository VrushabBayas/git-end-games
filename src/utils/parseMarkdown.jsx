import { Link } from "react-router-dom";
import CopyButton from "../components/common/CopyButton";

// parseMarkdown.js
export const components = {
  h1: (props) => <h1 className="text-3xl font-bold" {...props} />,
  code: (props) => <code className="bg-gray-200 p-1 rounded" {...props} />,
  a: Link,
  CopyButton,
};
export const placeholder = true;
