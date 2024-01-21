import { memo, useState } from 'react';

import { MindItem } from '../../model/Mind';

const MindList = () => {
  const [list, setList] = useState<MindItem[]>([
    {
      id: 'x1',
      title: '设计模式',
      path: '',
      lastUpdate: '2020-11-12 12:20',
    },
  ]);

  return (
    <div className="flex items-center flex-wrap gap-8 py-4 px-4">
      {list.map((item) => {
        return (
          <div className="text-center">
            <a
              href={`/mind/${item.id}`}
              className="w-40 h-40 border rounded-lg flex items-center justify-center hover:border-blue-400"
            >
              {item.title}
            </a>
            <div className="py-2">{item.lastUpdate}</div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(MindList);
