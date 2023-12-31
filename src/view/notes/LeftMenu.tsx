import { Menu } from "antd";
import { memo, useMemo } from "react";

import { serializeListToMenuItems } from "./util";
import { useMemoizedFn } from "ahooks";

const list = [
  {
    id: 1,
    title: "要写的文章",
    path: "",
    children: [
      {
        id: 2,
        title: "文章1",
        path: "/article/1",
      },
      {
        id: 3,
        title: "文章2",
        path: "/article/2",
      },
    ],
  },
];

const LeftMenu = () => {
  const items = useMemo(() => {
    return serializeListToMenuItems(list);
  }, []);

  const onMenuClick = useMemoizedFn((e) => {
    console.log("e", e);
  });

  return (
    <Menu
      className={"w-80"}
      items={items}
      mode="inline"
      onClick={onMenuClick}
    ></Menu>
  );
};

export default memo(LeftMenu);
