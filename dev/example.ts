const p = Deno.run({
  cmd: ["cargo", "build", "-p", "ffi"],
});

const status = await p.status();
if (!status.success) {
  Deno.exit(1);
}

const ex = Deno.run({
  cmd: ["deno", "run", "-A", "--unstable", `examples/${Deno.args[0]}.ts`],
});

const exStatus = await ex.status();
if (!exStatus.success) {
  Deno.exit(1);
}
