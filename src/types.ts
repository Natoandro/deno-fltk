import { encodeString } from "./utils/ffi.ts";

export interface WidgetInit {
  pos: [number, number];
  size: [number, number];
  title: string;
}

export function expandWidgetInit({ pos, size, title }: WidgetInit) {
  return [...pos, ...size, encodeString(title)] as const;
}
