import './App.css';
import Nav from '../Nav/Nav';
import { Component } from 'react';
import {fetchQuotes} from '../apiCalls';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Quotes from '../Quotes/Quotes';

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

  addQuote = (newQuote) =>  {
  this.setState({ quotes: [...this.state.quotes, newQuote] })
  }

  render() {
    console.log(this.state.quotes)
    return (
    <>
      <Nav />
      <main className="App">
      <Route exact path="/" render={() => {
        return(          
          <Quotes quotes={this.state.quotes} addQuote={this.addQuote} loading={this.state.loading}/>   
        )
      }}/>
      <Route exact path="/About"/>
      </main>
    </>

  );
}
}

export default App;
