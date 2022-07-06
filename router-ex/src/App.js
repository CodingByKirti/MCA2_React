import logo from "./logo.svg";
import "./App.css";
import { AboutUs } from "./Main Pages/AboutUs";
import { Settings } from "./Main Pages/Settings";
import { Home } from "./Main Pages/Home";
import { Switch, Route } from "react-router-dom";
import { NavBar } from "./Main Pages/NavBar";
function App() {
  return (
    <div>
      <h1>Shopping site</h1>
      <NavBar />
      <Switch>
        {/* <Route path="/home" component={Home}></Route> */}
        <Route exact path="/" component={Home}></Route>
        <Route path="/home/:data" component={Home}></Route>
        <Route path="/about" component={AboutUs}></Route>
        <Route path="/settings" component={Settings}></Route>
      </Switch>
    </div>
  );
}

export default App;
