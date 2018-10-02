import React, { Component } from 'react';
import './App.css';
// import Header from '../Header/Header';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: 'Luke',
  //   }
  //   this.handleChange = this.handleChange.bind(this);
  // } OLD WAY OF WRITING THINGS!!!!!!!!!!!!!!!!!!

  state = {
    user: {name: 'Lucas',
          city: 'St. Louis Park',}
  }

  handleChange = (event) => {
    let x = event.target.value; 
    this.setState({
      user: {
        ...this.state.user,
        name: x,
      }
    })
  }


  alsoHandleChange = (event) => {
    let x = event.target.value; 
    this.setState({
      user: {
        ...this.state.user,
        city: x,
      }
    })
  }

  handleClick = () => {
    console.log(this.state.user);
  }

  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        {JSON.stringify(this.state)}
        <br></br>
        <p>{this.state.user.name} is from {this.state.user.city}</p>
        <br></br>
        <input value={this.state.user.name} onChange={this.handleChange} type="text" placeholder="Name"/>
        <input value={this.state.user.city} onChange={this.alsoHandleChange} type="text" placeholder="City"/>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}

export default App;