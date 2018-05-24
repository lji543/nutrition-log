import React, { Component } from 'react';
import './styles/App.css';

import TopNav from './components/TopNav';

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: {}
    }
  }

  render() {
    return (
      <TopNav/>
    );
  }
}

export default App;
