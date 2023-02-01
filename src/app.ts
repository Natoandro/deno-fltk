import ffi from "ffi";

export function App() {
  ffi.app_init_all();

  return {
    async run() {
      await ffi.app_run();
    },
  };
}
