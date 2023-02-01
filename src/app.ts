import ffi from "ffi";
import * as sync from "@lib/sync.ts";

export function App() {
  ffi.app_init_all();

  return {
    async run() {
      sync.start();
      await ffi.app_run();
    },
  };
}
