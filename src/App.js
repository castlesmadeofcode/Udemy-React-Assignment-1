import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'


class App extends Component {

  state = {
    username: "boopz"
  }


  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {

    const style = {
      backgroundColor: 'blue',
    };

    return (
      <div style={style} className="App">
        <UserOutput paragraph1={this.paragraph1 = "Hello"}
          paragraph2={this.paragraph2 = "World"}
          username={this.state.username}></UserOutput>
        <UserOutput paragraph1={this.paragraph1 = "HELLO"}
          paragraph2={this.paragraph2 = "WORLD"} username={this.username = "boopz"}></UserOutput>

        <UserInput changed={this.changeUsernameHandler}></UserInput>
      </div>
    );
  }
}

export default App;
