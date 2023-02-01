import { App } from "@lib/app.ts";
import { Window } from "@lib/window.ts"


const app = App();

const win = Window({ pos: [100, 100], size: [400, 300], title: "Window" });
win.show();

await app.run();
