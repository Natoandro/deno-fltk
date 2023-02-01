import ffi from "ffi";
import { JsxElement } from "./runtime.ts";
import { encodeString } from "./utils/ffi.ts";
import { Event } from "./event.ts";
import { eventCallback } from "./utils.ts";

interface ButtonProps {
  title: string;
  pos?: [number, number];
  size?: [number, number];
  onClick?: Event | (() => void);
}

export function Button(props: ButtonProps): JsxElement {
  const title = encodeString(props.title);
  const [x, y] = props.pos ?? [0, 0];
  const [w, h] = props.size ?? [0, 0];

  const mount = () => {
    const p = ffi.button_create(x, y, w, h, title);

    if (props.onClick != null) {
      const cb = new Deno.UnsafeCallback(
        { parameters: [], result: "void" },
        eventCallback(props.onClick),
      );
      ffi.button_set_callback(p, cb.pointer);
    }

    return p;
  };

  const end = (_p: Deno.PointerValue) => {};

  return new JsxElement(mount, end);
}
