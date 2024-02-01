// eslint-disable-next-line simple-import-sort/imports
import { useMemoizedFn, useUpdate } from 'ahooks';
import { Button, Space } from 'antd';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router';
import MindMap from 'simple-mind-map';
import xmind from 'simple-mind-map/src/parse/xmind.js';
import ExportXMind from 'simple-mind-map/src/plugins/ExportXMind.js';
import Scrollbar from 'simple-mind-map/src/plugins/Scrollbar.js';

import { BarAction } from './type';
import { useActions } from './useActions';

import { getMindFile, getMindUrl } from '../../service/mind';
import { completeMindName } from '../../utils';
import HyperLinkModal, { HyperLinkModalValues } from './components/HyperLink';

// eslint-disable-next-line react-hooks/rules-of-hooks
MindMap.usePlugin(Scrollbar);
// eslint-disable-next-line react-hooks/rules-of-hooks
MindMap.usePlugin(ExportXMind);

const MindDetail = () => {
  const params = useParams<{ id: string }>();
  const mindMapRef = useRef<MindMap>();

  const forceUpdate = useUpdate();

  const {
    selectedNodes,
    backValid,
    forwardValid,
    back,
    forward,
    insertChild,
    insertSibling,
    removeNode,
    inertNodeLink,
    saveMind,
  } = useActions(mindMapRef.current);

  const [initHyperLink, setInitHyperLink] = useState<HyperLinkModalValues>();
  const [hyperLinkOpen, setHyperLinkOpen] = useState(false);

  const barLeftList = useMemo(() => {
    const hasSelectedNode = selectedNodes && selectedNodes.length > 0;
    const hasSelectedRootNode = hasSelectedNode && selectedNodes.some((node) => !node.parent);

    return [
      { id: BarAction.Back, label: '回退', disabled: !backValid },
      { id: BarAction.Forward, label: '前进', disabled: !forwardValid },
      {
        id: BarAction.Sibling,
        label: '同级节点',
        disabled: !hasSelectedNode || hasSelectedRootNode,
      },
      { id: BarAction.Child, label: '子节点', disabled: !hasSelectedNode },
      { id: BarAction.Delete, label: '删除', disabled: !hasSelectedNode || hasSelectedRootNode },
      { id: BarAction.Link, label: '超链接', disabled: !hasSelectedNode || selectedNodes.length > 1 },
      { id: BarAction.Mark, label: '备注', disabled: !hasSelectedNode },
    ];
  }, [backValid, forwardValid, selectedNodes]);

  const barRightList = [
    // { id: BarAction.Create, label: '新建' },
    // { id: BarAction.Open, label: '打开' },
    { id: BarAction.Save, label: '保存' },
    { id: BarAction.Import, label: '导入' },
    { id: BarAction.Export, label: '导出' },
  ];

  const onBarClick = useMemoizedFn((id: BarAction) => {
    const selectedNode = selectedNodes[0];

    switch (id) {
      case BarAction.Back:
        back();
        break;

      case BarAction.Forward:
        forward();
        break;

      case BarAction.Sibling:
        insertSibling();
        break;

      case BarAction.Child:
        insertChild();
        break;

      case BarAction.Delete:
        removeNode();
        break;

      case BarAction.Link:
        if (selectedNode) {
          const url = selectedNode.getData('hyperlink');
          const title = selectedNode.getData('hyperlinkTitle');
          setHyperLinkOpen(true);

          if (url && title) {
            setInitHyperLink({
              url,
              title,
            });
          }
        }
        break;

      case BarAction.Save:
        saveMind();
        break;

      default:
        break;
    }
  });

  const onHyperlinkOk = useMemoizedFn((value: HyperLinkModalValues) => {
    inertNodeLink(value.title, value.url);
    setHyperLinkOpen(false);
  });

  useEffect(() => {
    if (!params.id) {
      return;
    }

    const filename = completeMindName(params.id);

    const mindMap = new MindMap({
      el: document.getElementById('mind'),
      data: { data: { text: '新建节点' }, children: [] },
      enableFreeDrag: true,
    });

    mindMapRef.current = mindMap;

    getMindUrl(filename)
      .then((url) => {
        return getMindFile(url);
      })
      .then((blob) => {
        return xmind.parseXmindFile(new File([blob], filename));
      })
      .then((data) => {
        mindMap.setData(data);
      });

    forceUpdate();
    return () => {
      mindMapRef.current && mindMapRef.current.destroy();
      mindMapRef.current = undefined;
    };
  }, [forceUpdate, params.id]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <Space className="w-full h-10 absolute top-4 left-0 flex justify-center gap-4">
        <Space className="p-2 bg-gray-100 rounded">
          {barLeftList.map((item) => {
            return (
              <Button size="small" key={item.id} disabled={item.disabled} onClick={() => onBarClick(item.id)}>
                {item.label}
              </Button>
            );
          })}
        </Space>

        <Space className="p-2 bg-gray-100 rounded">
          {barRightList.map((item) => {
            return (
              <Button size="small" key={item.id} onClick={() => onBarClick(item.id)}>
                {item.label}
              </Button>
            );
          })}
        </Space>
      </Space>

      <div id="mind" className="w-full h-full"></div>

      {hyperLinkOpen && (
        <HyperLinkModal
          open={hyperLinkOpen}
          onCancel={() => setHyperLinkOpen(false)}
          onOk={onHyperlinkOk}
          initialValues={initHyperLink}
        ></HyperLinkModal>
      )}
    </div>
  );
};

export default memo(MindDetail);
