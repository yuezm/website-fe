import '.././../assets/styles/github-markdown.css';

import classNames from 'classnames';
import markdownit from 'markdown-it';
import anchor from 'markdown-it-anchor';
import collapsible from 'markdown-it-collapsible';
import taskLists from 'markdown-it-task-lists';
import toc from 'markdown-it-toc-done-right';
import { FC, memo } from 'react';

import { Note } from '../../model/Note';
import styles from './index.module.less';

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

  return (
    <div className={classNames('flex-auto', styles['detail-container'])}>
      <div className="px-10 py-8 min-w-screen-lg mx-auto">
        <section
          className="markdown-body"
          dangerouslySetInnerHTML={{
            __html: md.render('#hello word'),
          }}
        ></section>
      </div>
    </div>
  );
};

export default memo(Detail);
