import { memo } from "react";
import { ConfigProvider, Flex } from "antd";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import Header from "./view/Header";

const App = () => {
  return (
    <ConfigProvider>
      <Flex vertical className="full">
        <Header></Header>
        <main className="flex-auto">
          <RouterProvider router={router}></RouterProvider>
        </main>
        <footer></footer>
      </Flex>
    </ConfigProvider>
  );
};

export default memo(App);
