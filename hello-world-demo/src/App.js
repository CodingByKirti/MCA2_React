import logo from "./logo.svg";
import "./App.css";
import One from "./One";
import Two from "./Two";
import { DateComp } from "./DateComp";
import { ClassComp } from "./ClassComp";
import Message from "./Message";
import { Sum } from "./Sum";
import PropTypesDemo from "./PropTypesDemo";
import { Welcome } from "./Welcome";
import { DateProg } from "./DateProg";
import { HookTest } from "./HookTest";
import ParentComponent from "./FunAsPropsDemo/ParentComponent";
import Parent from "./FunAsPropsDemo/Parent";

function App() {
  return (
    <div>
      <Parent />
      {/* <ParentComponent /> */}
      {/* <Welcome fname="Abhay" lname="Sharma" />
      <ClassComp abc="testing" />
      <Sum a={1} b="kirti" />
      <PropTypesDemo data="Abc" />
      <DateProg />
      <HookTest /> */}
      {/* <DateComp data="Time" name="Kirti" />
      <ClassComp abc="testing" />
      <hr />
      <Message /> */}
    </div>
  );
}

export default App;
