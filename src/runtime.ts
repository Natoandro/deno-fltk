export interface Component<P> {
  (props: P): JsxElement;
}

export function jsx<P>(component: Component<P>, props: P): JsxElement {
  return component(props);
}

export class JsxElement {
  constructor(
    private name: string,
    private mount: () => Deno.PointerValue,
    private end: (p: Deno.PointerValue) => void,
    private children: Array<JsxElement> = [],
  ) {}

  render() {
    const p = this.mount();
    this.children.forEach((r) => r.render());
    this.end(p);
  }
}

export type Children = null | JsxElement | JsxElement[];

export function childList(children: Children): JsxElement[] {
  if (children == null) {
    return [];
  }
  if (!Array.isArray(children)) {
    return [children];
  }
  return children;
}

export const jsxs = jsx;
