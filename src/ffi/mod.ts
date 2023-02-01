import { dirname, fromFileUrl, resolve } from "std/path/mod.ts";

import app from "./app.ts";
import button from "./button.ts";
import window from "./window.ts";

const thisDir = dirname(fromFileUrl(import.meta.url));

const libName = resolve(thisDir, "../../target/debug/libffi.so");
const dylib = Deno.dlopen(libName, {
  ...app,
  ...button,
  ...window,
});

export default dylib.symbols;
