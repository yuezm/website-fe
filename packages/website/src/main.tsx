import 'antd/dist/reset.css';
import './index.less';

import { ConfigProvider } from 'antd';
import antdZhCN from 'antd/locale/zh_CN';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ConfigProvider locale={antdZhCN}>
      <App />
    </ConfigProvider>
  </StrictMode>,
);
