import '.././../assets/styles/github-markdown.css';

import classNames from 'classnames';
import markdownit from 'markdown-it';
import anchor from 'markdown-it-anchor';
import collapsible from 'markdown-it-collapsible';
import taskLists from 'markdown-it-task-lists';
import toc from 'markdown-it-toc-done-right';
import { FC, memo } from 'react';

import { Note } from '../../model/Note';
import { isURL } from '../../utils';
import styles from './index.module.less';

const txt = `
# JS

## JS 如何获取精确的时间戳

## 大前端世界观

成本一般分为两种，固定成本和边界成本，而技术的发展和革新，会不断降低边界成本，降低边界成本的同时，也是对技术人员，工作资源的消减

边界成本是每增加一个新的单位需要增加的成本，对于程序员来说，由时间复杂度来描述较为合适，边界成本就是 O(N)，降低边界成本其实就是将事件复杂度由 O(N) 降低，举个例子

1. 对各个浏览器进行适配：由标准化解决，一套代码适配所有浏览器。O(Browser) -> O(1)
2. 以命令式来操作 DOM：由响应式（数据驱动）解决，无需再写命令式的代码，而更关注于数据。O(DOM) -> O(1)
3. 对各个平台的适配：Windows，Mac，Linux，移动端，桌面端，小程序等等，由跨端技术解决。O(Platforms) -> O(1)

技术的发展，技术人员的工作内容也是随之变更，而随着 AI 的兴起，一个人能做的事情将会更多（One man, one army），技术从业者更加倾向于如下划分

1. System Engineer：更加注重底层，提供更加完善的理论，框架，工具以供他人使用。例如开发 AI，开发 react 框架
2. Product Engineer：生产完善的产品。例如借助 AI，一个人实现一整个产品
 
![picture 3](http://public.keven.work/02d7b30182b9691ade0e6188d9c1da40a5afdd21c9a0ddb01fe9400e5dc77ead.png)  


![picture 4](http://public.keven.work/c70429b40f80b8d0c0bdb3c365e4130dcc328a2dbcf7cb9792fcac2e80975be9.png)  
`;

const md = markdownit({
  html: true,
  linkify: true,
  typographer: true,
});
md.use(anchor, {
  permalink: true,
  permalinkBefore: true,
  permalinkSymbol: '#',
});
md.use(toc);
md.use(taskLists, { enabled: true });
md.use(collapsible);

interface DetailProps {
  selectNote: Note;
}

const Detail: FC<DetailProps> = (props) => {
  const { selectNote } = props;

  if (isURL(selectNote.path)) {
    // 从云端获取数据
  } else {
    // 从本地获取数据
  }

  return (
    <div className={classNames('flex-auto', styles['detail-container'])}>
      <div className="px-10 py-8 min-w-screen-lg mx-auto">
        <section
          className="markdown-body"
          dangerouslySetInnerHTML={{
            __html: md.render(txt),
          }}
        ></section>
      </div>
    </div>
  );
};

export default memo(Detail);
