import { App } from "@lib/app.ts";
import { Window } from "@lib/window.ts";
import { Button } from "@lib/button.ts";
import { createEvent } from "@lib/event.ts";
import { map, scan, startWith, tap } from "rxjs";
import { Group } from "../src/group.ts";

const app = new App();

const win = Window({ pos: [100, 100], size: [400, 300], title: "Hello" });

win.setup(() => {
  const $click = createEvent();
  const $title = $click.pipe(
    startWith(undefined),
    scan((count) => count + 1, -1),
    map((count) => `Click me ! (${count})`),
  );

  return (
    <Group pos={[0, 0]} fillParent>
      <Button
        title={$title}
        pos={[120, 150]}
        size={[160, 30]}
        onClick={$click}
      />
      <Button
        title={$title}
        pos={[120, 220]}
        size={[160, 30]}
        onClick={$click}
      />
    </Group>
  );
});

win.show();

await app.run();
