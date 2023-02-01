import { method_void, widget_init } from "./common.ts";

export default {
  button_create: widget_init,
  button_set_callback: method_void("u32"),
  button_set_title: method_void("buffer"),
  button_set_damage: method_void("u8"),
} as const;
