import { useMount } from 'ahooks';
import { Card, Typography } from 'antd';
import { memo, useState } from 'react';

import { MindItem } from '../../model/Mind';
import { getMinds } from '../../service/mind';
import { cutMindName, serializeTime } from '../../utils';

const MindList = () => {
  const [list, setList] = useState<MindItem[]>([]);

  useMount(() => {
    getMinds().then((data) => {
      setList(data);
    });
  });

  return (
    <div className="flex items-center flex-wrap gap-8 py-4 px-4">
      {list.map((item) => {
        const key = cutMindName(item.key);
        return (
          <div key={item.key} className="text-center">
            <a href={`/mind/${encodeURI(key)}`} className="no-underline">
              <Card hoverable className="w-40 h-40 mb-2">
                {key}
              </Card>

              <Typography.Text>{serializeTime(item.putTime / 10000)}</Typography.Text>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default memo(MindList);
