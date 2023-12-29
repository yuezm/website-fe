import { useMemoizedFn } from "ahooks";
import { Menu, MenuProps } from "antd";
import { memo, useEffect, useState } from "react";
import { router } from "../router";

const items = [
  {
    label: '知识库',
    key: "/",
  },
  {
    label: "脑图",
    key: "/mind",
  },
  {
    label: "画板",
    key: "/draw",
  },
];

const Header = () => {
  const [current, setCurrent] = useState("mail");

  const onMenuClick: MenuProps["onClick"] = useMemoizedFn((e) => {
    setCurrent(e.key);
    router.navigate(e.key);
  });

  useEffect(() => {
    const location = window.location;
    setCurrent(location.pathname)
  }, []);

  return (
    <header className="flex-none">
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
