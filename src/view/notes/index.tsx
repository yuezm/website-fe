import { memo, useState } from 'react';
import LeftMenu from './LeftMenu';
import Detail from './Detail';

const Notes = () => {
  const [selectNote, setSelectNote] = useState('');

  return (
    <div className="flex h-full">
      <LeftMenu select={selectNote} onSelectChange={setSelectNote}></LeftMenu>

      <Detail select={selectNote}></Detail>
    </div>
  );
};

export default memo(Notes);
