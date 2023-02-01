import ffi from "ffi";
import { encodeString } from "./utils/ffi.ts";

interface WindowInit {
  pos: [number, number];
  size: [number, number];
  title: string;
}

export function Window({ pos, size, title }: WindowInit) {
  const pointer = ffi.window_create(
    pos[0],
    pos[1],
    size[0],
    size[1],
    encodeString(title),
  );
  return {
    show() {
      ffi.window_show(pointer);
    },
  };
}
