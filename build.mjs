import fs from "fs";
import phtmlJsx from "@phtml/jsx";

const jsx = fs.readFileSync("./pattern.jsx", "utf-8");
phtmlJsx
  .process(
    jsx,
    {},
    { data: { dir: "ltr", pClass: "foo", name: "World", items: [1, 2, 3] } }
  )
  .then(result => console.log(result.html));
