import ffi from "ffi";

let nextId = 1;

const table = new Map<number, () => void>();

export function register(cb: () => void) {
  const id = nextId++;
  table.set(id, cb);
  return id;
}

export function start() {
  setInterval(() => {
    while (true) {
      const id = ffi.sync_poll();
      if (id == 0) {
        break;
      }
      table.get(id)?.();
    }
  }, 0);
}
