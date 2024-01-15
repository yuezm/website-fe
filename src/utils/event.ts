import { UIEvent } from 'react';

export function noopFunctionStop(ev: UIEvent) {
  ev.stopPropagation();
  ev.nativeEvent.stopPropagation();
}
