import ffi from "ffi";
import { JsxElement } from "./runtime.ts";
import { encodeString } from "./utils/ffi.ts";
import { Event } from "./event.ts";
import { eventCallback } from "./utils.ts";
import { map, Observable, of } from "rxjs";
import * as sync from "@lib/sync.ts";

interface ButtonProps {
  title: string | Observable<string>;
  pos?: [number, number];
  size?: [number, number];
  onClick?: Event | (() => void);
}

export function Button(props: ButtonProps): JsxElement {
  const $title =
    (typeof props.title === "string" ? of(props.title) : props.title).pipe(
      map((title) => encodeString(title)),
    );
  let title = encodeString("");
  let mounted: Deno.PointerValue | null = null;
  $title.subscribe((t) => {
    title = t;
    if (mounted != null) {
      ffi.button_set_title(mounted, title);
      // ffi.button_set_damage(mounted, 10);
    }
  });

  const [x, y] = props.pos ?? [0, 0];
  const [w, h] = props.size ?? [0, 0];

  const mount = () => {
    mounted = ffi.button_create(x, y, w, h, title);

    if (props.onClick != null) {
      const eCode = sync.register(eventCallback(props.onClick));
      ffi.button_set_callback(mounted, eCode);
    }

    return mounted;
  };

  const end = (_p: Deno.PointerValue) => {};

  return new JsxElement(mount, end);
}
