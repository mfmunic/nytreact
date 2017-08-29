import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import SearchDiv from "./components/searchDiv"
import ResultsDiv from "./components/resultsDiv"
import SavedDiv from "./components/savedDiv"
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader>
          <h1>New York Times Article Scrubber</h1>
          <small>Search for and annotate articles of interest</small>
        </PageHeader>
        <SearchDiv />
        <ResultsDiv />
        <SavedDiv />
      </div>
    );
  }
}

export default App;
