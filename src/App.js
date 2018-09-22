import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import SlotMachine from './container/SlotMachine/SlotMachine';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <SlotMachine />
        </Layout>
      </div>
    );
  }
}

export default App;
