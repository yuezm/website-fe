import { useMemoizedFn } from "ahooks";
import { Menu, MenuProps } from "antd";
import { memo, useState } from "react";
import { useRoutes } from "react-router-dom";

const items = [
  {
    label: <a href="/">知识库</a>,
    key: "notes",
  },
  {
    label: "脑图",
    key: "mind",
  },
  {
    label: "画板",
    key: "draw",
  },
];

const Header = () => {
  const [current, setCurrent] = useState("mail");
  const r = useRoutes();

  const onMenuClick: MenuProps["onClick"] = useMemoizedFn((e) => {
    setCurrent(e.key);
  });

  return (
    <header>
      <Menu
        onClick={onMenuClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      ></Menu>
    </header>
  );
};

export default memo(Header);
