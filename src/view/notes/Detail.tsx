import { memo } from "react";
import "./github-markdown.css";
import "./index.module.less";

import markdownit from "markdown-it";
import anchor from "markdown-it-anchor";
import toc from "markdown-it-toc-done-right";
import taskLists from "markdown-it-task-lists";
import collapsible from "markdown-it-collapsible";

const m =
  "# markdown-it rulezz!\n\n\n## with markdown-it-toc-done-right rulezz even more! \n - [ ] 我是个任务 \n\n 我是个正文";

const md = markdownit({
  html: true,
  linkify: true,
  typographer: true,
});

console.log("md", md);

// md.addRule("heading", (tokens, opts) => {
//   const level = tokens[0].data.level;
//   const text = tokens[0].text;

//   return [
//     {
//       type: "element",
//       tag: "details",
//       children: [
//         {
//           type: "element",
//           tag: "summary",
//           children: [
//             {
//               type: "text",
//               text,
//             },
//           ],
//         },
//         {
//           type: "element",
//           tag: "div",
//           children: [],
//         },
//       ],
//     },
//   ];
// });

md.use(anchor, {
  permalink: true,
  permalinkBefore: true,
  permalinkSymbol: "#",
});
md.use(toc);
md.use(taskLists, { enabled: true });
md.use(collapsible);

const Detail = () => {
  console.log("md.render(m),", md.render(m));
  console.log(md.toc);

  return (
    <div
      className="flex-auto markdown-body"
      dangerouslySetInnerHTML={{
        __html: md.render(m),
      }}
    >
      {/* {md.render(m)} */}
    </div>
  );
};

export default memo(Detail);
