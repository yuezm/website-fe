import { memo } from "react";
import { useScroll } from 'ahooks'
import classNames from "classnames";

function Header() {
  const documentScroll = useScroll(document);

  return <header className={
    classNames('fixed w-full  top-0 left-0 right-0 bg-white h-16 z-30 transition-all ease duration-150 flex', {
      'drop-shadow-md': documentScroll && documentScroll.top > 10,
    })
  }>
    hello word lo
  </header>
}

export default memo(Header);