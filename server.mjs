import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { context } from 'esbuild';

const production = process.argv.includes('--production');
const root = fileURLToPath(new URL(production ? './dist/' : './', import.meta.url));
const development = production ? null : await context({
  entryPoints: [fileURLToPath(new URL('./src/entry.jsx', import.meta.url))],
  bundle: true, write: false, format: 'esm', jsx: 'automatic',
  define: { 'process.env.NODE_ENV': '"development"' },
});
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
  ".ttf": "font/ttf",
};

const server = createServer(async (request, response) => {
  if (development && request.url.split('?')[0] === '/app.js') {
    try {
      const result = await development.rebuild();
      response.writeHead(200, { 'Content-Type': 'text/javascript; charset=utf-8', 'Cache-Control': 'no-store' });
      response.end(result.outputFiles[0].contents);
    } catch {
      response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('The development bundle could not be built. Check the server terminal.');
    }
    return;
  }
  const requestPath = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
  const requestedFile = normalize(join(root, requestPath === "/" ? "index.html" : requestPath.slice(1)));
  const safePath = requestedFile.startsWith(root) ? requestedFile : join(root, "index.html");

  try {
    const fileStats = await stat(safePath);
    if (!fileStats.isFile()) throw new Error("Not a file");
    response.writeHead(200, { "Content-Type": contentTypes[extname(safePath)] || "application/octet-stream" });
    response.end(await readFile(safePath));
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end('Not found. The portfolio is at /');
  }
});

server.listen(port, () => {
  console.log(`Portfolio running at http://localhost:${port}`);
});
