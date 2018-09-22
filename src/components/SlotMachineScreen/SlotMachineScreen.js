import React from 'react';

import Slots from './Slots/Slots';
import classes from './SlotMachineScreen.css';

import apple from '../../assets/images/apple.jpg';
import banana from '../../assets/images/banana.jpg';
import pineapple from '../../assets/images/pineapple.jpg';



const slotMachineScreen = (props) => {

  return(
    <div>
      <Slots/>
      <Slots/>
      <Slots/>
    </div>
  );
}

export default slotMachineScreen;
