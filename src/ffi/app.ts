export default {
  app_init_all: {
    parameters: [],
    result: "void",
  },
  app_run: {
    parameters: [],
    result: "void",
    nonblocking: true,
  },
  app_lock: {
    parameters: [],
    result: "void",
    nonblocking: true,
  },
  app_unlock: {
    parameters: [],
    result: "void",
  },
  app_awake: {
    parameters: [],
    result: "void",
  },
} as const;
