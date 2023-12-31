import { defaultValueCtx, Editor, rootCtx } from "@milkdown/core";
import type { FC } from "react";

import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";
import { commonmark } from "@milkdown/preset-commonmark";
import { nord } from "@milkdown/theme-nord";
import { math } from "@milkdown/plugin-math";
import { prism, prismConfig } from "@milkdown/plugin-prism";

import "@milkdown/theme-nord/style.css";
import "prism-themes/themes/prism-nord.css";


import markdown from "refractor/lang/markdown";
import css from "refractor/lang/css";
import javascript from "refractor/lang/javascript";
import typescript from "refractor/lang/typescript";
import jsx from "refractor/lang/jsx";
import tsx from "refractor/lang/tsx";

const m = `
$$
a^2 + b^2 = c^2
$$

\`\`\`javascript
function (){
  console.log('Hello milkdown!');
}
\`\`\`
`;

export const MilkdownEditor: FC = () => {
  useEditor((root) => {
    return Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, root);
        ctx.set(defaultValueCtx, m);

        ctx.set(prismConfig.key, {
          configureRefractor: (refractor) => {
            refractor.register(markdown);
            refractor.register(css);
            refractor.register(javascript);
            refractor.register(typescript);
            refractor.register(jsx);
            refractor.register(tsx);
          },
        });
      })
      .config(nord)
      .use(commonmark)
      .use(math)
      .use(prism);
  }, []);

  return <Milkdown />;
};

export const MilkdownEditorWrapper: FC = () => {
  return (
    <MilkdownProvider>
      <MilkdownEditor />
    </MilkdownProvider>
  );
};
