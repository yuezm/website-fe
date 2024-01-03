import { useMemoizedFn } from 'ahooks';
import { memo, useEffect, useState } from 'react';
import { router } from '../router';
import classNames from 'classnames';

interface MenuItem {
  label: string;
  path: string;
}

const items: MenuItem[] = [
  {
    label: '知识库',
    path: '/',
  },
  {
    label: '脑图',
    path: '/mind',
  },
  {
    label: '画板',
    path: '/draw',
  },
];

const Header = () => {
  const [current, setCurrent] = useState('mail');

  const onMenuClick = useMemoizedFn((item: MenuItem) => {
    setCurrent(item.path);
    router.navigate(item.path);
  });

  useEffect(() => {
    const location = window.location;
    setCurrent(location.pathname);
  }, []);

  return (
    <header className="flex-none border-b flex items-center">
      {items.map((item) => {
        return (
          <div
            key={item.path}
            className={classNames('ml-3 text-base cursor-pointer h-full leading-10 py-2', {
              'border-b border-sky-500 text-sky-500': current === item.path,
            })}
            style={{
              marginBottom: '-1px',
            }}
            onClick={() => onMenuClick(item)}
          >
            {item.label}
          </div>
        );
      })}
    </header>
  );
};

export default memo(Header);
