const esbuild = require("esbuild");
const { spawnSync } = require("node:child_process");
const path = require("node:path");

async function build() {
  await esbuild.build({ entryPoints: ["src/blog/server.jsx"], outfile: "dist/blog-server.cjs", bundle: true, platform: "node", format: "cjs", packages: "external", logLevel: "info" });
  await esbuild.build({ entryPoints: ["src/blog/client.jsx"], outfile: "public/blog.js", bundle: true, platform: "browser", format: "iife", minify: true, logLevel: "info" });
  const cli = path.join(__dirname, "../node_modules/@tailwindcss/cli/dist/index.mjs");
  const result = spawnSync(process.execPath, [cli, "-i", "src/blog/blog.css", "-o", "public/blog.css", "--minify"], { stdio: "inherit" });
  if (result.status !== 0) throw new Error(`Tailwind build failed: ${result.status}`);
}

build().catch((error) => { console.error(error); process.exitCode = 1; });
