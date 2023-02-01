import { App } from "@lib/app.ts";
import { Window } from "@lib/window.ts"
import { Button } from "../../src/button.ts";


const app = App();

const win = Window({ pos: [100, 100], size: [400, 300], title: "Hello" });

win.setup(() => {
  Button({
    pos: [160, 220],
    size: [80, 40],
    title: "Click Me",
  })
  .setCallback((b) => {
    console.log("Clicked")
  })
})

win.show();

await app.run();
