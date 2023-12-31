import { memo } from "react";
import { MilkdownEditorWrapper } from "./Editor";
import './index.module.less';

const Detail = () => {
  return (
    <div className="flex-auto">
      <MilkdownEditorWrapper></MilkdownEditorWrapper>
    </div>
  );
};

export default memo(Detail);
