import fs from "fs";

import phtml from "phtml";
import phtmlJsx from "@phtml/jsx";

export default () => {
  const foo = fs.readFileSync("./src/components/foo.jsx", "utf-8");
  const data = { dir: "ltr", pClass: "foo", name: "World", items: [1, 2, 3] };

  phtml
    .use(phtmlJsx({ data: data }))
    .process(foo)
    .then(result => console.log(result.html));
};
