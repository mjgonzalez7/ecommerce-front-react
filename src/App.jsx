import React, { Component } from 'react';
import Navbar1 from './components/Navbar1/Navbar1';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

// const Greeting = props => <p>Hello {props.name}!</p>;

class App extends Component {
  constructor(props) {
    super(props);
    this.title = 'React App';
    this.state = { clickCounter: 10 };
    }
  render() {
      return (
        <div>
          <Navbar1></Navbar1>
          <h1>{this.title}</h1>
          <br />
          <ItemListContainer></ItemListContainer>
          <br />
          {this.renderClickCount()}
        </div>
       );
      }
  renderClickCount() {
      return <p>I've been clicked {this.state.clickCounter} times!</p>;
      }
}

export default App;