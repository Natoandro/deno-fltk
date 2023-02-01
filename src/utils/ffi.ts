export function encodeString(str: string) {
  return new TextEncoder().encode(str + "\0");
}
