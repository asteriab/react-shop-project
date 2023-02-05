import React from "react";
import ReactDOM from "react-dom/client";

function Title() {
  return <h1>Hello TS</h1>;
}

function List() {
  return (
    <React.Fragment>
      <ul>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
      </ul>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, commodi
        tempora rem dolore saepe voluptatem mollitia ab! Tenetur tempora
        dolorem, ex iusto itaque totam neque perspiciatis eligendi, id quos
        unde!
      </p>
    </React.Fragment>
  );
}
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => {
  return (
    <div className="App">
      <Title />
      <List />
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
