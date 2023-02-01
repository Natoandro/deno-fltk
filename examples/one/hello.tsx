import { App } from "@lib/app.ts";
import { Window } from "@lib/window.ts";
import { Button } from "@lib/button.ts";


const app = App();

const win = Window({ pos: [100, 100], size: [400, 300], title: "Hello" });

win.setup(() => {
  return <Button title="Click me" pos={[160, 220]} size={[80, 30]} onClick={() => console.log("Hello! You clicked the button!")} />;
});

win.show();

await app.run();
