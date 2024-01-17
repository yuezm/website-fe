import { useMemoizedFn } from 'ahooks';
import classnames from 'classnames';
import { memo, useEffect, useState } from 'react';

const items = [
  {
    label: '知识库',
    key: '/',
  },
  {
    label: '脑图',
    key: '/mind',
  },
  {
    label: '画板',
    key: '/draw',
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
        <nav className="fixed inset-x-0 bottom-0 top-14 hidden items-center gap-8 px-6 text-secondary-700 md:static md:flex md:bg-transparent md:p-0 h-screen md:h-auto">
          <ul className="items-center gap-8 space-y-6 font-medium md:mt-0 md:flex md:space-y-0">
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
