import { FC, Fragment, memo, useCallback, useMemo, useState } from 'react';
import { useMemoizedFn } from 'ahooks';
import { Menu } from '@headlessui/react';

import * as qiniu from 'qiniu-js';

import { Note } from '../../model/Note';
import { MoreOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { CreateMenuItem, DropItemsId, DropMenuItemClick, HandleClick } from './type';
import classNames from 'classnames';
import styles from './index.module.less';
import { get } from 'lodash';
import { noopFunctionStop } from '../../utils';
import { Button, Input } from '../../components';

const dropMoreItems: MenuProps['items'] = [
  {
    label: '重命名',
    key: DropItemsId.Rename,
  },
  {
    label: '删除',
    key: DropItemsId.Delete,
  },
];

const dropAddItems: MenuProps['items'] = [
  {
    label: '新增分组',
    key: DropItemsId.AddGroup,
  },
  {
    label: '新增文档',
    key: DropItemsId.AddNote,
  },
];

interface LeftMenuProps {
  select: string | undefined;
  onSelectChange(select: string): void;
}

import { Switch } from '@headlessui/react';

function MyToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch checked={enabled} onChange={setEnabled} as={Fragment}>
      {({ checked }) => (
        /* Use the `checked` state to conditionally style the button. */
        <button className={`${checked ? 'bg-blue-600' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}>
          <span className="sr-only">Enable notifications</span>
          <span className={`${checked ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
        </button>
      )}
    </Switch>
  );
}

import { RadioGroup } from '@headlessui/react';
import Example from '../../components/DropMenu';

function MyRadioGroup() {
  let [plan, setPlan] = useState('startup');

  return (
    <RadioGroup value={plan} onChange={setPlan}>
      <RadioGroup.Label>Plan</RadioGroup.Label>
      <RadioGroup.Option value="startup">{({ checked }) => <span className={checked ? 'bg-blue-200' : ''}>Startup</span>}</RadioGroup.Option>
      <RadioGroup.Option value="business">{({ checked }) => <span className={checked ? 'bg-blue-200' : ''}>Business</span>}</RadioGroup.Option>
      <RadioGroup.Option value="enterprise">{({ checked }) => <span className={checked ? 'bg-blue-200' : ''}>Enterprise</span>}</RadioGroup.Option>
    </RadioGroup>
  );
}

const links = [
  { href: '/account-settings', label: 'Account settings' },
  { href: '/support', label: 'Support' },
  { href: '/license', label: 'License' },
  { href: '/sign-out', label: 'Sign out' },
];

function MyMenu() {
  return (
    <Menu>
      <Menu.Button>Options</Menu.Button>
      <Menu.Items>
        {links.map((link) => (
          /* Use the `active` state to conditionally style the active item. */
          <Menu.Item key={link.href} as={Fragment}>
            {({ active }) => (
              <a href={link.href} className={`${active ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}>
                {link.label}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}

const LeftMenu: FC<LeftMenuProps> = () => {
  const [list, setList] = useState<Note[]>([]);

  const onMenuClick: DropMenuItemClick = useMemoizedFn((info) => {});

  const onDropItemClick: HandleClick = useMemoizedFn((mk, info) => {
    const key = info.key as DropItemsId;

    if (key === DropItemsId.Delete) {
      if (!mk) {
        return;
      }
      // 删除
    }

    if (key === DropItemsId.AddGroup) {
      // 添加分组
      if (mk === '') {
        setList([
          ...list,
          {
            id: 1,
            path: '',
            title: '新建分组',
            children: [],
          },
        ]);
      } else {
        // 添加分组
        const t = get(list, mk) as Note | undefined;

        if (!t) {
          return;
        }

        if (!t.children) {
          t.children = [
            {
              id: 1,
              path: '',
              title: '新建分组',
              children: [],
            },
          ];
        } else {
          t.children.push({
            id: 1,
            path: '',
            title: '新建分组',
            children: [],
          });
        }

        setList([...list]);
      }
    }

    if (key === DropItemsId.AddNote) {
      if (!mk) {
        setList([
          ...list,
          {
            id: 1,
            path: '',
            title: '新建文档',
          },
        ]);
      } else {
        const t = get(list, mk) as Note | undefined;

        if (!t) {
          return;
        }

        if (!t.children) {
          t.children = [
            {
              id: 1,
              path: '',
              title: '新建文档',
            },
          ];
        } else {
          t.children.push({
            id: 1,
            path: '',
            title: '新建文档',
          });
        }

        setList([...list]);
      }
    }

    if (key === DropItemsId.Rename) {
      //
    }
  });

  const onTopDropItemClick: DropMenuItemClick = useMemoizedFn((info) => {
    onDropItemClick('', info);
  });

  // 将七牛云的文档序列化为菜单
  const serializeListToMenuItems: CreateMenuItem = useCallback(
    (list, key) => {
      return list.map((item, index) => {
        const childKey = key ? key + '.index' : index.toString();

        return {
          key: childKey,
          label: (
            <div className="flex items-center justify-between">
              {item.title}

              <div onClick={noopFunctionStop}>
                <Dropdown
                  trigger={['click']}
                  menu={{
                    items: dropMoreItems,
                    onClick: (ev) => onDropItemClick(childKey, ev),
                  }}
                >
                  <MoreOutlined className="text-lg rounded p-1 hover:bg-gray-300" />
                </Dropdown>

                <Dropdown trigger={['click']} menu={{ items: dropAddItems, onClick: (ev) => onDropItemClick(childKey, ev) }}>
                  <PlusOutlined className="m-0 text-lg p-1 rounded hover:bg-gray-300" style={{ marginInlineStart: 0 }} />
                </Dropdown>
              </div>
            </div>
          ),
          children: item.children ? serializeListToMenuItems(item.children, childKey) : undefined,
        };
      });
    },
    [onDropItemClick]
  );

  const items: NotNull<MenuProps['items']> = useMemo(() => {
    return serializeListToMenuItems(list, '');
  }, [list, serializeListToMenuItems]);

  const links = [
    { href: '/account-settings', label: 'Account settings' },
    { href: '/support', label: 'Support' },
    { href: '/license', label: 'License' },
    { href: '/sign-out', label: 'Sign out' },
  ];

  return (
    <div className={classNames('w-80 border-r px-4 py-8', styles['menu-container'])}>
      <MyToggle></MyToggle>

      <MyMenu></MyMenu>
      <Example></Example>
      <div className="w-full flex">
        <Input />

        <Menu>
          <Menu.Button>Options</Menu.Button>
          <Menu.Items>
            {links.map((link) => (
              /* Use the `active` state to conditionally style the active item. */
              <Menu.Item key={link.href} as={Fragment}>
                {({ active }) => (
                  <a href={link.href} className={`${active ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}>
                    {link.label}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
        {/* <Button className="ml-4">新增</Button> */}
      </div>
    </div>
  );
};

export default memo(LeftMenu);
