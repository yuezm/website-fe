import '@mind-elixir/node-menu/dist/style.css';

import NodeMenu from '@mind-elixir/node-menu';
import MindElixir, { MindElixirInstance } from 'mind-elixir';
import { memo, useEffect, useRef } from 'react';

const Mind = () => {
  const me = useRef<MindElixirInstance>();

  useEffect(() => {
    const instance = new MindElixir({
      el: '#mind',
      direction: MindElixir.SIDE,
      locale: 'cn',
    });
    instance.install(NodeMenu);
    instance.init(MindElixir.new('new topic'));
    me.current = instance;

    instance.bus.addListener('operation', () => {
      console.log(instance.getData());
      console.log(instance.getDataMd);
      console.log(instance.getDataString());
    });
  }, []);

  return <div id="mind" className="w-full h-full"></div>;
};

export default memo(Mind);
