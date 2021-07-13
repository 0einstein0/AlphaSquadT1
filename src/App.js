import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CaseStudies from "./pages/CaseStudies";
import CaseStudiesInner from "./pages/CaseStudiesInner";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Pricing" component={Pricing}></Route>
        <Route path="/CaseStudies" component={CaseStudies}></Route>
        <Route path="/CaseStudiesInner" component={CaseStudiesInner}></Route>
        <Route exact path="/" component={Homepage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
