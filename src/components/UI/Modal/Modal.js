import React, { Component } from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';

class Modal extends Component {

    render () {
        return (
            <Aux>
                <div
                    className={ classes.Modal }
                    style={{
                        transform: this.props.showMessage ? 'translateY(0)' : 'translateY(-500vh)',
                        opacity: this.props.showMessage ? '1' : '0',
                    }}>
                    <div className={ classes.Content }>
                      {this.props.children}
                    </div>
                </div>
            </Aux>
        )
    }
}

export default Modal;
