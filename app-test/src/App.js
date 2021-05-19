import logo from "./logo.svg";
import "./App.css";
import { MyComp } from "./MyComp";
import ClassComp from "./ClassComp";
import StateFulComp from "./StateFulComp";
import Counter from "./Counter";
import { DateProg } from "./DateProg";

function App() {
  return (
    <>
      <h1>
        <MyComp data="Today is  : " />
      </h1>
      <ClassComp name="Kirti" designation="trainer" />
      <StateFulComp />
      <Counter />
      class - className for htmlFor camelCase onClick tabIndex
      <hr />
      <hr />
      <DateProg />
    </>
  );
}

export default App;
