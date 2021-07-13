import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CaseStudies from "./pages/CaseStudies";
import CaseStudiesInner from "./pages/CaseStudiesInner";
import Pricing from "./pages/Pricing";
import NavigBar from "./components/NavigBar";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul class="grid grid-flow-col gap-8">
          <li>
            <Link to="/">Overview</Link>
          </li>
          <li>
            <Link to="/Pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/CaseStudies">Case Studies</Link>
          </li>
          <li>
            <Link to="/CaseStudiesInner">FAQ</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/Pricing" component={Pricing}></Route>
        <Route exact path="/CaseStudies" component={CaseStudies}></Route>
        <Route
          exact
          path="/CaseStudiesInner"
          component={CaseStudiesInner}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
