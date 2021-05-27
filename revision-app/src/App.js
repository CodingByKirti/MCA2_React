import logo from "./logo.svg";
import "./App.css";
import { FunComp } from "./pages/FunComp";
import ClassComp from "./pages/ClassComp";
import Likes from "./pages/Likes";

function App() {
  return (
    <div className="App">
      <FunComp name="Smita"> Hello Dear </FunComp>
      <ClassComp name="Amay" />
      <hr />
      <hr />
      <Likes />
    </div>
  );
}

export default App;
// export {NamedExport1,NamedExport2}
// OR
// export let fname="Kirti"
//export let lname="Sharma"
