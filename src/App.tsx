import { memo } from "react";
import { ConfigProvider, Flex } from "antd";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import Header from "./view/Header";
import Footer from "./view/Footer";

const App = () => {
  return (
    <ConfigProvider>
      <Flex vertical className="h-full w-full">
        <Header></Header>

        <main className="flex-auto h-full w-full">
          <RouterProvider router={router}></RouterProvider>
        </main>

        <Footer></Footer>
      </Flex>
    </ConfigProvider>
  );
};

export default memo(App);
