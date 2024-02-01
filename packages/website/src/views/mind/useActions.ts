import { useMemoizedFn } from 'ahooks';
import { useEffect, useState } from 'react';
import MindMap from 'simple-mind-map';

import { uploadMind } from '../../service/mind';

export const useActions = (mindMap: MindMap | undefined) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedNodes, setSelectedNodes] = useState<any[]>([]);

  const [backValid, setBackValid] = useState(false);
  const [forwardValid, setForwardValid] = useState(false);

  const back = useMemoizedFn(() => {
    // 回退一次
    if (mindMap) {
      mindMap.execCommand('BACK');
    }
  });

  const forward = useMemoizedFn(() => {
    // 前进一次
    if (mindMap) {
      mindMap.execCommand('FORWARD');
    }
  });

  const insertSibling = useMemoizedFn(() => {
    if (mindMap) {
      mindMap.execCommand('INSERT_NODE');
    }
  });

  const insertChild = useMemoizedFn(() => {
    if (mindMap) {
      mindMap.execCommand('INSERT_CHILD_NODE');
    }
  });

  const removeNode = useMemoizedFn(() => {
    if (mindMap) {
      mindMap.execCommand('REMOVE_CURRENT_NODE');
    }
  });

  const inertNodeLink = useMemoizedFn((title: string, url: string) => {
    selectedNodes.forEach((node) => {
      node.setHyperlink(url, title);
    });
  });

  const insertNodeMark = useMemoizedFn((content: string) => {
    selectedNodes.forEach((node) => {
      node.setNote(content);
    });
  });

  const newMind = useMemoizedFn(() => {
    //
  });

  const importMind = useMemoizedFn(() => {
    //
  });

  const exportMind = useMemoizedFn(() => {
    //
  });

  const saveMind = useMemoizedFn(async () => {
    if (mindMap) {
      const data = mindMap.getData(true);
      const blob = await mindMap.doExportXMind.xmind(data, '测试.xmind');

      console.log('blob', blob);

      const file = new File([blob], '测试.xmind');

      uploadMind(file);

      // const a = mindMap.export('XMind', true, '卧槽').then((file) => {
      //   console.log('file', file);
      // });
    }
  });

  useEffect(() => {
    if (mindMap) {
      const backHandler = (index: number, len: number) => {
        setBackValid(index > 0);
        setForwardValid(index < len - 1);
      };

      mindMap.on('back_forward', backHandler);

      const activeHandler = (n, ns) => {
        setSelectedNodes(ns);
      };
      mindMap.on('node_active', activeHandler);

      return () => {
        mindMap.off('back_forward', backHandler);
        mindMap.off('node_active', activeHandler);
      };
    }
  }, [mindMap]);

  return {
    backValid,
    forwardValid,
    selectedNodes,

    back,
    forward,

    insertSibling,
    insertChild,
    removeNode,
    inertNodeLink,
    insertNodeMark,

    newMind,
    importMind,
    exportMind,
    saveMind,
  };
};
