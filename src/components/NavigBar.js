import React from 'react';

function NavigBar({...otherProps}) {
    return <div {...otherProps} class=" px-16 py-7 self-center grid grid-flow-col auto-cols-max gap-4">
          <h3>Overview</h3>
          <h3>Pricing</h3>
          <h3>Case Studies</h3>
          <h3>FAQ</h3>

      </div>;
  }
  

export default NavigBar;