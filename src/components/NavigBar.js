import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Homepage from  '../pages/Homepage';
import Pricing from '../pages/Pricing';
import CaseStudies from '../pages/CaseStudies';
import CaseStudiesInner from '../pages/CaseStudiesInner';

function NavigBar({...otherProps}) {
    return <div {...otherProps} class=" px-16 py-7 self-center grid grid-flow-col auto-cols-max gap-4">
          <BrowserRouter>
          <nav >
        <ul class="grid grid-flow-col gap-8">
          <li><Link to="/Homepage">Overview</Link></li>
          <li><Link to="/Pricing">Pricing</Link></li>
          <li><Link to="/CaseStudies">Case Studies</Link></li>
          <li><Link to="/CaseStudiesInner">FAQ</Link></li>   
        </ul>
      </nav>
 
</BrowserRouter>

      </div>;
  }
  

export default NavigBar;