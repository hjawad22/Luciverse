import './App.css';
import Nav from '../Nav/Nav';
import { Component } from 'react';
import {fetchQuotes} from '../apiCalls';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Quotes from '../Quotes/Quotes';
import About from '../About/About';
import Errors from '../Errors/Errors';

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
    console.log(this.state.quotes);
    return (
      <>
        <Nav />
        <main className="App">
        <Switch>
          <Route exact path="/" render={() => {
            if(this.state.errorMessage) {
              return (
                <Errors errorMessage={this.state.errorMessage}/>
              )
            }
            return (
              <Quotes quotes={this.state.quotes} addQuote={this.addQuote} loading={this.state.loading} />
            );
          }} />
          <Route exact path="/About" component={About} />
          <Route exact path="*" render={() => {
            return (
              <Errors errorMessage={this.errorMessage}/>
            );
          }} />
        </Switch>
        </main>
      </>
    );
  }
}
  export default App;
