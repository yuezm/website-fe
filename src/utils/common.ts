import { UIEvent } from "react";

export function noopFunctionStop(ev: UIEvent) {
  console.log('ev', ev);

  ev.stopPropagation();
  ev.nativeEvent.stopPropagation();
}