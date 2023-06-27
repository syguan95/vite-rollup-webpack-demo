import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";
const PageOne = loadable(() => import("./pages/page1/index"));
const PageTwo = loadable(() => import("./pages/page2/index"));

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/page1" component={PageOne} exact></Route>
        <Route path="/page2" component={PageTwo} exact></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
