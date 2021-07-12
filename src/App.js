
import './App.css';
import { BrowserRouter,Link, Route, Switch } from 'react-router-dom';
import Homepage from  './pages/Homepage';
import CaseStudies from './pages/CaseStudies';
import CaseStudiesInner from './pages/CaseStudiesInner';
import Pricing from './pages/Pricing';
import NavigBar from './components/NavigBar';

function App() {
  return ( 
    <>

    <BrowserRouter>
         <Switch>
    <Route exact path="/" component={Homepage}>
    </Route>
    <Route exact path="/Pricing" component={Pricing}>
    </Route>
    <Route exact path="/CaseStudies"  component={CaseStudies}  >
    </Route>
    <Route exact path="/CaseStudiesInner" component={CaseStudiesInner} >

    </Route>
  </Switch></BrowserRouter>
  </>
  );
}

export default App;
