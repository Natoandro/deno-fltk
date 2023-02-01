export const widget_init = {
  parameters: ["i32", "i32", "i32", "i32", "buffer"],
  result: "pointer",
} as const;

export function method_void<T extends ReadonlyArray<string>>(...params: T) {
  return {
    parameters: ["pointer", ...params],
    result: "void",
  } as const;
}
