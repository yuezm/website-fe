import { useMemoizedFn } from 'ahooks';
import classnames from 'classnames';
import { memo, useEffect, useState } from 'react';

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
  const [current, setCurrent] = useState('/');

  const onMenuClick = useMemoizedFn((key: string) => {
    setCurrent(key);
  });

  useEffect(() => {
    const location = window.location;
    setCurrent(location.pathname);
  }, []);

  return (
    <header className="backdrop-blur bg-white/60 shadow-sm py-4">
      <div className="mx-auto max-w-8xl justify-between px-4 md:flex">
        <div>Keven</div>
        <nav className="leading-6 text-slate-700 dark:text-slate-200">
          <ul className="flex space-x-8">
            {items.map((item) => {
              return (
                <li key={item.key} onClick={() => onMenuClick(item.key)}>
                  <a
                    href={item.key}
                    className={classnames('block hover:text-blue-500', {
                      'text-blue-500': current === item.key,
                    })}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default memo(Header);
