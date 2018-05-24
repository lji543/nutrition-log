import React, { Component } from 'react';

class TopNav extends React.Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">TOP NAV</h1>
          </header>
        </div>
        <button onClick={() => alert('click')}>
          {this.props.value}
        </button>
      </div>
    );
  }
}

export default TopNav;
