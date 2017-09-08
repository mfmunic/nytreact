import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import SearchDiv from "./components/searchDiv"
import ResultsDiv from "./components/resultsDiv"
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader>
          New York Times Article Scrubber
          <div>
            <small>Search for and annotate articles of interest</small>
          </div>
        </PageHeader>
        <SearchDiv />
      </div>
    );
  }
}

export default App;
