import { App } from "@lib/app.ts";
import { Window } from "@lib/window.ts";
import { Button } from "@lib/button.ts";
import { createEvent } from "@lib/event.ts";
import { map, scan, startWith, tap } from "rxjs";

const app = new App();

const win = Window({ pos: [100, 100], size: [400, 300], title: "Hello" });

win.setup(() => {
  const $click = createEvent();
  $click.subscribe(() => console.log("Hello! You clicked the button!"));
  const $title = $click.pipe(
    startWith(undefined),
    scan((count) => count + 1, -1),
    tap((count) => console.log(`You clicked ${count} times!`)),
    map((count) => `Click me ! (${count})`),
  );

  return (
    <Button
      title={$title}
      pos={[120, 220]}
      size={[160, 30]}
      onClick={$click}
    />
  );
});

win.show();

await app.run();
