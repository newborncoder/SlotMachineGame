import React, {Component} from 'react';
import classes from './Slots.css';
import Modal from '../../UI/Modal/Modal';

import Slot from './Slot/Slot';


class Slots extends Component{

  state = {
    showMessage: false,
  }

  showMessageHandler = () => {
    this.setState({
      showMessage : true,
    })
  }

  closeMessageHandler = () => {
    this.setState({
      showMessage : false,
    })
  }

  render(){

    let symbols = ["Apple","Banana","Pineapple"];
    let message = "Better luck next time."
    let showMessage = false;
    let successMessage = <p
    style={{
      color:'red',
      backgroundColor:'black',
      textAlign:'center',
    }}>Lost</p>;

    var shuffleSymbols = (symbols) => {
      for (var c = symbols.length - 1; c > 0; c--) {
        var b = Math.floor(Math.random() * (c + 1));
        var a = symbols[c];
        symbols[c] = symbols[b];
        symbols[b] = a;
      }
      return symbols[0];
    };

    let symbolOne = shuffleSymbols(symbols);
    let symbolTwo = shuffleSymbols(symbols);
    let symbolThree = shuffleSymbols(symbols);

    if ( symbolOne === symbolTwo && symbolOne === symbolThree){
       successMessage = <p
       style={{
         color:'green',
         backgroundColor:'black',
         textAlign:'center',
       }}>Won</p>
    }

    //TODO : Make a seperate component for result/Modal.
    // Modal will not show up for now because it hides the actual result
    return (
      <div>
      <div className={classes.Slots}>
        <Slot symbol={symbolOne}/>
        <Slot symbol={symbolTwo}/>
        <Slot symbol={symbolThree}/>
      </div>
        { successMessage }

        <Modal showMessage={this.state.showMessage}>
          Congratulations! You won!
          <p>Click the Play Again button to start over!</p>
          <button style={{ fontSize:'25px' }} onClick={this.closeMessageHandler}>Play Again</button>
        </Modal>

        </div>

    )
  }
}


export default Slots;
