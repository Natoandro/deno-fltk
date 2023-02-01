import ffi from "ffi";
import { childList, Children, JsxElement } from "./runtime.ts";
import { encodeString } from "./utils/ffi.ts";

interface GroupProps {
  pos?: [number, number];
  size?: [number, number];
  children: Children;
  fillParent: boolean;
}

export function Group(props: GroupProps): JsxElement {
  const [x, y] = props.pos ?? [0, 0];
  const [w, h] = props.size ?? [0, 0];

  return new JsxElement(
    "Group",
    // mount
    () => {
      const p = ffi.group_create(x, y, w, h, encodeString(""));
      if (props.fillParent) {
        ffi.group_fill_parent(p);
      }
      return p;
    },
    // end
    (p) => {
      ffi.group_end(p);
    },
    childList(props.children),
  );
}
