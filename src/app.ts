import ffi from "ffi";

export function App() {
  ffi.app_init_all();

  return {
    async run() {
      setInterval(() => {
        ffi.app_sync();
      }, 0);
      await ffi.app_run();
    },
  };
}
