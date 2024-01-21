import '@mind-elixir/node-menu/dist/style.css';

import NodeMenu from '@mind-elixir/node-menu';
import MindElixir, { MindElixirInstance } from 'mind-elixir';
import { memo, useEffect, useRef } from 'react';

const MindDetail = () => {
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
      console.log('getData', instance.getData());
      console.log('getDataMd', instance.getDataMd());
      console.log('getDataString', instance.getDataString());
    });
  }, []);

  return <div id="mind" className="w-full h-full"></div>;
};

export default memo(MindDetail);
