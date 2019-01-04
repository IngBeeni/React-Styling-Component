import React, { Component } from 'react';
import SassComponent from './SassComponent';
import CSSModule from './CSSModule';
import StyledComponent from './StyledComponent';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <CSSModule />
        </div>
        <div>
          <SassComponent />
        </div>
        <div>
          <StyledComponent />
        </div>
      </div>
    );
  }
}

export default App;
