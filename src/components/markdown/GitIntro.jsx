// src/pages/GitIntroPage.jsx

import { MDXProvider } from "@mdx-js/react";
import GitIntro from "../../content/intro/intro-git.mdx";
import { components } from "../../utils/parseMarkdown";

function GitIntroPage() {
return (
<div className="container">
  <MDXProvider components={components}>
    <GitIntro />
  </MDXProvider>
</div>
);
}

export default GitIntroPage;
