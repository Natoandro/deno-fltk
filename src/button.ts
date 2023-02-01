import ffi from "ffi";
import { expandWidgetInit, WidgetInit } from "./types.ts";

interface IButton {
  setCallback(handler: (bt: IButton) => void): void;
}

export function Button(init: WidgetInit) {
  console.log({ init });
  const pointer = ffi.button_create(...expandWidgetInit(init));
  const button: IButton = {
    setCallback(handler: (bt: typeof button) => void) {
      const callback = new Deno.UnsafeCallback({
        parameters: [],
        result: "void",
      }, () => {
        handler(button);
      });

      ffi.button_set_callback(
        pointer,
        callback.pointer,
      );
    },
  };
  return button;
}
