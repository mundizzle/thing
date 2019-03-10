<html jsx lang="en" dir={dir}>
  <head>
    <title>pHTML JSX</title>
  </head>
  <body>
    <p class={pClass}>Hello, {name}!</p>
    <ul>
      {items.map(item => (
        <li>Item {item}</li>
      ))}
    </ul>
  </body>
</html>;
