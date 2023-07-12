import { useRequest } from 'ahooks';
import { memo } from 'react';
import { getNoteList } from '../../services';
import Item from './Item';
import MoreItem from './MoreItem';

function List() {
  const { data, error } = useRequest(getNoteList);

  console.log('data', data);

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <div className="mb-20">
        <Item></Item>
      </div>

      <div>
        <h2 className="text-4xl font-bold mb-10">More stories</h2>
        <div className="grid grid-cols-3 gap-x-4 gap-y-8 w-full">
          <MoreItem></MoreItem>
          <MoreItem></MoreItem>
          <MoreItem></MoreItem>
          <MoreItem></MoreItem>
        </div>
      </div>
    </div>
  );
}

export default memo(List);
