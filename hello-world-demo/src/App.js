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
import BootstrapTest from "./BootstrapTest";
import BSDemo from "./BSDemo";
import FormsDemo from "./FormsDemo";
import SecondForm from "./SecondForm";
import UnControlledForm from "./UnControlledForm";
import { UncontrolledRefHook } from "./UncontrolledRefHook";
import { Simple } from "./HOCDemo/Simple";
import { HOC } from "./HOCDemo/HOC";
import RawComp from "./HOCDemo/RawComp";
import Laptop from "./HOCDemo/Laptop";
import LCMethods from "./LifeCycleMethods/LCMethods";
import { UseEffectHook } from "./LifeCycleMethods/UseEffectHook";
import { UseIsomorphicFetch } from "./UseIsomorphicFetch";
import { decNum, incNum } from "./Actions/MyActions";
import { useDispatch, useSelector } from "react-redux";
import { IncDec } from "./Reducers/IncDec";

function App() {
  const state = useSelector((state) => state.IncDec);

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decNum())}>-</button>
      <input type="text" value={state} size="1" />
      <button onClick={() => dispatch(incNum())}>+</button>
      {/* <UseIsomorphicFetch /> */}
      {/* <UseEffectHook /> */}
      {/* <LCMethods /> */}
      {/* <RawComp color="MagenticBlue" /> */}
      <hr />
      {/* <Laptop size="14 inch" color="black" /> */}
      {/* <Simple /> */}
      {/* <HOC comp={Simple} /> */}
      {/* <UncontrolledRefHook /> */}
      {/* <UnControlledForm /> */}
      {/* <SecondForm /> */}
      {/* <FormsDemo /> */}
      {/* <BSDemo /> */}
      {/* <BootstrapTest /> */}
      {/* <Parent /> */}
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
      {/* <PropTypesDemo data="Abc" /> */}
    </div>
  );
}

export default App;
