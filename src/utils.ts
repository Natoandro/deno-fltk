import { Event } from "@lib/event.ts";

export function eventCallback(handler: (() => void) | Event): () => void {
  return typeof handler === "function" ? handler : () => {
    handler.emit();
  };
}
