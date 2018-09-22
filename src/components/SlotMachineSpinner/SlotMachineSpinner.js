import React from 'react';
import Aux from '../../hoc/Aux/Aux';

import classes from './SlotMachineSpinner.css';

const slotMachineSpinner = (props) => (
  <div className={classes.SpinnerDiv}>
    <button className={classes.Spinner} onClick={props.spun}>Spin</button>
  </div>
)

export default slotMachineSpinner;
