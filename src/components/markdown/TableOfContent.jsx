import { MDXProvider } from "@mdx-js/react";
import TableOfContent from "../../content/tableofcontent.mdx";
import { components } from "../../utils/parseMarkdown";

function TableOfContentPage() {
return (
<MDXProvider components={components}>
  <TableOfContent />
</MDXProvider>
);
}

export default TableOfContentPage;
