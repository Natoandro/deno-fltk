const c = [];

export function encodeString(str: string) {
  const buffer = new TextEncoder().encode(str + "\0");
  c.push(buffer);
  return buffer;
}
