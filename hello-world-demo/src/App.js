import logo from "./logo.svg";
import "./App.css";
import One from "./One";
import Two from "./Two";
import { DateComp } from "./DateComp";
import { ClassComp } from "./ClassComp";
import Message from "./Message";

function App() {
  return (
    <div>
      <DateComp data="Time" name="Kirti" />
      <ClassComp abc="testing" />
      <hr />
      <Message />
    </div>
  );
}

export default App;
