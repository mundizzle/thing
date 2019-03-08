import fs from "fs";
import phtmlJsx from "@phtml/jsx";

const jsx = fs.readFileSync("./pattern.html", "utf-8");
console.log(jsx);
phtmlJsx
  .process(jsx, {}, { data: { dir: "ltr", pClass: "foo", name: "World" } })
  .then(result => console.log(result.html));
