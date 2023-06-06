import './App.css';
import Nav from '../Nav/Nav';
import { Component } from 'react';
import {fetchQuotes} from '../apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      quotes: [], 
      errorMessage: '',
      loading: true
    }
  }
  componentDidMount() {
   fetchQuotes()
      .then(quotesData => {
        this.setState({
          quotes: quotesData,
          loading: false,
        });
      })
      .catch(error => {
        this.setState({
          errorMessage: error.message
        });
      });
  };
  render() {
    console.log(this.state.quotes)
    return (
    <>
      <Nav />
      <main className="App">

      </main>
    </>

  );
}
}

export default App;
