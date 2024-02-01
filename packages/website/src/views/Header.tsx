import { useMount } from 'ahooks';
import { Menu, MenuProps } from 'antd';
import { memo, useState } from 'react';

import { router } from '../router';

const items = [
  {
    label: '脑图',
    key: '/mind',
  },
  {
    label: '画板',
    key: '/draw',
  },
  {
    label: '知识库',
    key: '//localhost:4321/',
  },
];

const Header = () => {
  const [current, setCurrent] = useState(['/']);

  const onClick: MenuProps['onClick'] = (e) => {
    router.navigate(e.key);
    setCurrent([e.key]);
  };

  useMount(() => {
    const location = window.location;
    setCurrent([location.pathname]);
  });

  return (
    <header>
      <Menu mode="horizontal" selectedKeys={current} items={items} onClick={onClick}></Menu>
    </header>
  );
};

export default memo(Header);
