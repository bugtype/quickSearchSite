import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const sites = [
{name: "okky", url: "http://okky.kr", token: ["프로그래밍", "질의의응답"] },
{name: "daum", url: "http://daum.net.", token: ["인기","무료"] },
]
class App extends Component {

  constructor(props) {
    super(props);
    this.state ={
      users: sites,
      input: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({input: event.target.value});
    console.log(this.state)
  }
  render() {
    const list = this.state.users
        .filter(site => this.state.input === '' || site.token.includes(this.state.input))
        .map((d, index) => <li key={index}>{d.name}</li>);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <p className="App-intro">
          {list}
        </p>
      </div>
    );
  }
}

export default App;

