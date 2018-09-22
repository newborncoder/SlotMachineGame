import React from 'react';

import classes from './Slot.css';

import appleimg from '../../../../assets/images/apple.jpg';
import bananaimg from '../../../../assets/images/banana.jpg';
import pineappleimg from '../../../../assets/images/pineapple.jpg';

import Aux from '../../../../hoc/Aux/Aux';

const slot = (props) =>{

  let imgStatement = null;

  if(props.symbol === 'Apple'){
    imgStatement = <img src={appleimg}/>
  }
  else if (props.symbol === 'Pineapple'){
    imgStatement = <img src={pineappleimg}/>
  }
  else if (props.symbol === 'Banana'){
    imgStatement = <img src={bananaimg}/>
  }

  return (
    <div className={classes.Slot}>
    <div className={classes[props.symbol]}>
      { imgStatement }
    </div>
    </div>
  );
}

export default slot;
