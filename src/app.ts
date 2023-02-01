import ffi from "ffi";
import * as sync from "@lib/sync.ts";

export class App {
  constructor() {
    ffi.app_init_all();
  }

  async run(): Promise<void> {
    sync.start();
    await ffi.app_run();
  }
}

export function update() {
  ffi.app_awake();
}
