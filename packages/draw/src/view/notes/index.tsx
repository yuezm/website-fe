import { memo, useMemo, useState } from 'react';

import { RootNote } from '../../model/Note';
import Detail from './Detail';
import LeftMenu from './LeftMenu';
import { createNewGroup, findNoteByKeys } from './util';

const Notes = () => {
  const [rootNote, setRootNote] = useState<RootNote>(createNewGroup('root'));
  const [selectKey, setSelectKey] = useState('');

  const selectNote = useMemo(() => {
    return findNoteByKeys(rootNote, selectKey);
  }, [rootNote, selectKey]);

  return (
    <div className="flex h-full">
      <LeftMenu
        selectKey={selectKey}
        onSelectKeyChange={setSelectKey}
        rootNote={rootNote}
        onRootNoteChange={setRootNote}
      ></LeftMenu>

      <Detail selectNote={selectNote}></Detail>
    </div>
  );
};

export default memo(Notes);
