import { Observable, Subscriber } from "rxjs";

export class Event<T = void> extends Observable<T> {
  private subs: Array<Subscriber<T>> = [];

  constructor() {
    super((s: Subscriber<T>) => {
      this.subs.push(s);
    });
  }

  emit(e: T) {
    this.subs.forEach((s) => s.next(e));
  }
}

export function createEvent<T = void>() {
  return new Event<T>();
}
