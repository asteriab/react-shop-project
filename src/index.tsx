import React from "react";
import ReactDOM from "react-dom/client";

// without jsx
// const title = React.createElement("h1", { id: "title" }, "Hello React.js");
// console.log(title);

// jsx -> js extended
// tsx -> ts extended

const title = <h1 id="title">Hello React2</h1>;
console.log(title);

const content = (
  <div>
    {title}
    {10 + 10}
    <ul className="list">
      <li>list item1</li>
      <li>list item2</li>
      <li>list item3</li>
    </ul>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ut
      debitis, ipsa aperiam accusamus repellendus molestias, nesciunt error
      quibusdam unde explicabo necessitatibus illum? Praesentium sint voluptatem
      itaque fugit sit unde.
    </p>
  </div>
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode>{content}</React.StrictMode>);
