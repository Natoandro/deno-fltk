import ffi from "ffi";
import { JsxElement } from "./runtime.ts";
import { expandWidgetInit, WidgetInit } from "./types.ts";

export function Window(init: WidgetInit) {
  const pointer = ffi.window_create(...expandWidgetInit(init));
  return {
    show() {
      ffi.window_show(pointer);
    },
    setup(fn: () => JsxElement) {
      const el = fn();
      el.render();
      ffi.window_end(pointer);
    },
  };
}
