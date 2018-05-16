import React, { Component } from 'react';
import MyComponent from './MyComponent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Initial name',
      title: 'Initial title'
    };

    this.onClick = this.onClick.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  updateName(event) {
    this.setState({ name: event.target.value });
  }

  onClick(event) {
    this.setState({
      name: 'New app name',
      title: 'New app title'
    });
  }

  render() {
    return (
      <div className="App">
        <MyComponent 
          name={this.state.name}
          title={this.state.title} 
          onClick={this.onClick}/>
        <input 
          onChange={this.updateName}
          value={this.state.name}/>
      </div>
    );
  }
}

export default App;
