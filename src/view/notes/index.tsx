import { Flex } from "antd";
import { memo } from "react";
import LeftMenu from "./LeftMenu";
import Detail from "./Detail";
import Outline from "./Outline";

const Notes = () => {
  return (
    <Flex>
      <LeftMenu></LeftMenu>
      <Detail></Detail>
      <Outline></Outline>
    </Flex>
  );
};

export default memo(Notes);
