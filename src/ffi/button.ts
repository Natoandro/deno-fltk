import { widget_init } from "./common.ts";

export default {
  button_create: widget_init,
  button_set_callback: {
    parameters: ["pointer", "u32"],
    result: "void",
  },
  button_set_title: {
    parameters: ["pointer", "buffer"],
    result: "void",
  },
  button_set_damage: {
    parameters: ["pointer", "u8"],
    result: "void",
  },
} as const;
