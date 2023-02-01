export default {
  window_create: {
    parameters: ["i32", "i32", "i32", "i32", "buffer"],
    result: "pointer",
  },
  window_show: {
    parameters: ["pointer"],
    result: "void",
  },
} as const;
