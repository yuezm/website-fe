import { Flex } from "antd";
import { memo, useState } from "react";
import LeftMenu from "./LeftMenu";
import Detail from "./Detail";
import Outline from "./Outline";

const Notes = () => {
  const [selectNote, setSelectNote] = useState('');

  return (
    <Flex className="h-full">
      <LeftMenu></LeftMenu>
      
      <Detail selectNote={selectNote}></Detail>
      
      <Outline></Outline>
    </Flex>
  );
};

export default memo(Notes);
