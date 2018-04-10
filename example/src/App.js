import React, { Component } from 'react';
import firebase from './firebase';
import Home from './components/Home';
import Landing from './components/Landing';
import Header from './components/Header';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Our Amazing Title',
      details: '',
      count: 0,
      show_title: true,
      fruits: ['apple', 'orange', 'grape']
    }
  }

  componentDidMount() {
    firebase.database().ref('test').set({
      title: 'Some title'
    })
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Header 
          show_title={this.state.show_title} 
          title={this.state.title} 
          increase={this.increaseCount} />

        {/* <h1>{this.state.title}</h1> */}
      
        <h2>{this.state.count}</h2>

        <p>{this.state.details}</p>

        <h3>{this.state.fruits}</h3>

        <ul>
          {this.state.fruits.map((fruit, index) => (
            <li key={index}>Fruit: {fruit}</li>
          ))}
        </ul>
        

        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        <input type="text" name="details" value={this.state.details} onChange={this.handleChange} />

        <button onClick={this.increaseCount}>Increase Count</button>

        <Route path="/" exact component={Landing} />
        <Route path="/home" component={Home} />
      </div>
    );
  }
}

export default App;
