import './App.css';
import Nav from '../Nav/Nav'
import { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      qoutes: []
    }
  }
  render() {
    return (
    <>
      <Nav />
      <main lassName="App">

      </main>
    </>

  );
}
}

export default App;
