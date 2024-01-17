import { MoreOutlined, PlusOutlined } from '@ant-design/icons';
import { useMemoizedFn } from 'ahooks';
import { Button, Dropdown, Input, Tree } from 'antd';
import classNames from 'classnames';
import { FC, Key, memo, useCallback, useMemo, useState } from 'react';

import { RootNote } from '../../model/Note';
import styles from './index.module.less';
import { AddItems, AppendItems, CreateMenuItem, DropItemsId, DropMenuItemClick, HandleClick } from './type';
import { createNewGroup, createNewNote, findNoteByKeys, generateNewKey } from './util';

interface LeftMenuProps {
  rootNote: RootNote;
  onRootNoteChange(rootNote: RootNote): void;

  selectKey: string;
  onSelectKeyChange(selectKey: string): void;
}

const LeftMenu: FC<LeftMenuProps> = (props) => {
  const { selectKey, onSelectKeyChange, rootNote, onRootNoteChange } = props;

  const [treeExpandKeys, setTreeExpandKeys] = useState<string[]>([]);

  const treeSelectKeys = useMemo(() => [selectKey], [selectKey]);

  // 针对某个文档的操作
  const onDropItemClick: HandleClick = useMemoizedFn((mk, info) => {
    const key = info.key as DropItemsId;

    if (key === DropItemsId.Rename) {
      //
    }

    if (key === DropItemsId.Delete) {
      if (!mk) {
        return;
      }
      // 删除
    }

    if (key === DropItemsId.AddGroup || key === DropItemsId.AddNote) {
      const cloneRootNote = { ...rootNote };

      const parent = findNoteByKeys(cloneRootNote, mk);
      const children = parent.children ? parent.children : (parent.children = []);

      const newGroup = key === DropItemsId.AddGroup ? createNewGroup() : createNewNote();
      children.push(newGroup);
      onRootNoteChange(cloneRootNote);

      const newSelectedKey = generateNewKey(mk, children.length - 1);
      onSelectKeyChange(newSelectedKey);
      if (mk) {
        setTreeExpandKeys([...treeExpandKeys, mk]);
      }
    }
  });

  // 顶部操作，不针对某个文档
  const onTopDropItemClick: DropMenuItemClick = useMemoizedFn((info) => {
    onDropItemClick('', info);
  });

  // 将七牛云的文档序列化为菜单
  const serializeListToMenuItems: CreateMenuItem = useCallback(
    (list, key) => {
      return list.map((item, index) => {
        const childKey = generateNewKey(key, index);

        return {
          key: childKey,
          title: (
            <div className="flex items-center justify-between">
              {item.title}

              <Dropdown
                menu={{
                  items: AppendItems,
                  onClick: (e) => onDropItemClick(childKey, e),
                }}
              >
                <Button type="text">
                  <MoreOutlined />
                </Button>
              </Dropdown>
            </div>
          ),
          children: item.children ? serializeListToMenuItems(item.children, childKey) : undefined,
        };
      });
    },
    [onDropItemClick],
  );

  const onTreeSelect = useMemoizedFn((selectedKeys: Key[]) => {
    if (selectedKeys.length > 0) {
      onSelectKeyChange(selectedKeys[0] as string);
    }
  });

  const onTreeExpand = useMemoizedFn((expandKeys: Key[]) => {
    setTreeExpandKeys(expandKeys as string[]);
  });

  const treeData = useMemo(() => {
    return serializeListToMenuItems(rootNote.children, '');
  }, [rootNote, serializeListToMenuItems]);

  return (
    <div className={classNames('w-80 border-r px-4 py-8', styles['menu-container'])}>
      <div className="w-full flex">
        <Input className="mr-2" />

        <Dropdown
          menu={{
            items: AddItems,
            onClick: onTopDropItemClick,
          }}
        >
          <Button type="primary">
            <PlusOutlined />
          </Button>
        </Dropdown>
      </div>

      <div className={classNames('pt-4')}>
        <Tree
          defaultExpandAll
          selectedKeys={treeSelectKeys}
          expandedKeys={treeExpandKeys}
          treeData={treeData}
          onSelect={onTreeSelect}
          onExpand={onTreeExpand}
        ></Tree>
      </div>
    </div>
  );
};

export default memo(LeftMenu);
