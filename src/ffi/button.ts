import { widget_init } from "./common.ts";

export default {
  button_create: widget_init,
  button_set_callback: {
    parameters: ["pointer", "function"],
    result: "void",
  },
} as const;
