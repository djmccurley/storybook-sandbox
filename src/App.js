import React, { Component } from 'react';
import logo from './logo.svg';
import CTASection from './components/CTASection'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <CTASection 
        title='Section Title'
        content='Section content in the form of a paragraph or multiple paragraphs of copy.'
        cancel='Cancel'
        confirm='Confirm'
      ></CTASection>

      </div>
    );
  }
}

export default App;
