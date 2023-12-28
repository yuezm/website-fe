import { memo } from "react";
import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import Header from "./view/Header";

const App = () => {
  return (
    <ConfigProvider>
      <Header></Header>

      <main>
        <RouterProvider router={router}></RouterProvider>
      </main>

      <footer></footer>
    </ConfigProvider>
  );
};

export default memo(App);
