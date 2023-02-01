import ffi from "ffi";
import { expandWidgetInit, WidgetInit } from "./types.ts";

export function Window(init: WidgetInit) {
  const pointer = ffi.window_create(...expandWidgetInit(init));
  return {
    show() {
      ffi.window_show(pointer);
    },
    setup(fn: () => void) {
      fn();
      ffi.window_end(pointer);
    },
  };
}
