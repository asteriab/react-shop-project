import React from "react";
import ReactDOM from "react-dom/client";
// import BlaBla from "./List";
import { List } from "./List";

type TitleProps = {
  name: string;
  year: number;
  text1?: string;
};

// interface ITitleProps {
//   name: string;
// }
// interfaces can be inherited while types are not inherited.

const Title = ({ name, year, text1 = "test" }: TitleProps) => {
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
      {/* <BlaBla /> */}
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
