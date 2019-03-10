import fs from "fs-extra";
import chokidar from "chokidar";
import browserSync from "browser-sync";

import build from "./build.mjs";

const dist = "./dist";

fs.emptyDir(dist, error => {
  if (error) console.error(error);

  fs.ensureDir(dist, error => {
    if (error) console.error(error);

    const server = browserSync.create();
    server.init({
      server: dist,
      browser: "google chrome",
      files: "**"
    });
    chokidar.watch("./src/**").on("all", build);
  });
});
