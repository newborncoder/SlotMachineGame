import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import SlotMachineScreen from '../../components/SlotMachineScreen/SlotMachineScreen';
import SlotMachineSpinner from '../../components/SlotMachineSpinner/SlotMachineSpinner';
import Modal from '../../components/UI/Modal/Modal';

import classes from './SlotMachine.css';

class SlotMachine extends Component {

  state = {
    showMessage:false
  }

  spunHanlder = () => {
      this.setState({
        ...this.state
      })
  }

  render(){
    return(
      <Aux>
        <SlotMachineScreen />
        <SlotMachineSpinner spun={this.spunHanlder}/>
      </Aux>
    )
  }

}

export default SlotMachine;
