import React, { Component } from 'react';
import propTypes from 'prop-types'
import './Form.css';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
    quote: '',
    author: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitQuote = (event) => {
    event.preventDefault();
    const newQuote = {
      id: Date.now(),
      ...this.state 
    }
    this.props.addQuote(newQuote);
    this.clearInputs(); 
  }

  clearInputs = () => {
    this.setState({ quote: '', author: '' });
  }


  render() {
    return (
      <>
      <form>
        <input
          type='text'
          placeholder='what is the quote?'
          name='quote'
          value={this.state.quote}
          onChange={event => this.handleChange(event)}   
        />

        <input
          type='text'
          placeholder='who would say it?'
          name='author'
          value={this.state.author}
          onChange={event => this.handleChange(event)}
        />      
        <button className='add-button' onClick={event => this.submitQuote(event)}>ADD</button>
        </form>
      </>
    )
  }
}

Form.propTypes = {
    addQuote: propTypes.func.isRequired
  };

export default Form;

