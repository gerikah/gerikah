import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const port = process.env.PORT || 4173;
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
};

const server = createServer(async (request, response) => {
  const requestPath = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
  const requestedFile = normalize(join(root, requestPath === "/" ? "index.html" : requestPath.slice(1)));
  const safePath = requestedFile.startsWith(root) ? requestedFile : join(root, "index.html");

  try {
    const fileStats = await stat(safePath);
    if (!fileStats.isFile()) throw new Error("Not a file");
    response.writeHead(200, { "Content-Type": contentTypes[extname(safePath)] || "application/octet-stream" });
    response.end(await readFile(safePath));
  } catch {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(await readFile(join(root, "index.html")));
  }
});

server.listen(port, () => {
  console.log(`Portfolio running at http://localhost:${port}`);
});
