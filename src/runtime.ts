export interface Component<P> {
  (props: P): JsxElement;
}

interface WidgetBaseProps {
  create: () => Deno.PointerValue;
  end: (p: Deno.PointerValue) => void;
  children: Array<JsxElement>;
}

export function WidgetBase(
  { create, end, children }: WidgetBaseProps,
): JsxElement {
  return new JsxElement(create, end, children);
}

export function jsx<P>(component: Component<P>, props: P): JsxElement {
  return component(props);
}

export class JsxElement {
  constructor(
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
