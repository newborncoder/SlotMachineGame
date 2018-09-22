import React, { Component } from 'react';
import SlotMachine from '../../container/SlotMachine/SlotMachine';

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Toolbar/Toolbar';

class Layout extends Component{

  render(){
    return(
      <Aux>
        <Toolbar/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;
