import { copyFile, cp, readdir, rm, writeFile } from "node:fs/promises";

const rootDirectory = new URL("../", import.meta.url);
const distDirectory = new URL("../dist/", import.meta.url);

await copyFile(new URL("index.html", distDirectory), new URL("404.html", distDirectory));

for (const entry of await readdir(distDirectory, { withFileTypes: true })) {
  const source = new URL(entry.name, distDirectory);
  const target = new URL(entry.name, rootDirectory);

  await rm(target, { recursive: true, force: true });
  await cp(source, target, { recursive: entry.isDirectory() });
}

await writeFile(new URL(".nojekyll", rootDirectory), "");
