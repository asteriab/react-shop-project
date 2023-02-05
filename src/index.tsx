import React from "react";
import ReactDOM from "react-dom/client";

function List() {
  return (
    <>
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
    </>
  );
}

type TitleProps = {
  name: string;
  year: number;
  text1?: string;
};

// interface ITitleProps {
//   name: string;
// }
// interfaces can be inherited while types are not inherited.

const Title = ({ name, year, text1 }: TitleProps) => {
  return (
    <>
      <h1>
        Hello {name} i {year}
      </h1>
      <p>Hi {text1} hello</p>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Title name="App" year={10} text1="tygydysh" />
      <Title name="React" year={1} />
      <Title name="TS" year={115} />
      <Title name="JS" year={97} />
      <List />
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
