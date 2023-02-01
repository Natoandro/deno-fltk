import { widget_init } from "./common.ts";

export default {
  window_create: widget_init,
  window_end: {
    parameters: ["pointer"],
    result: "void",
  },
  window_show: {
    parameters: ["pointer"],
    result: "void",
  },
} as const;
