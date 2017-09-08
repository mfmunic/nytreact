import React from 'react';
import { Panel, Button } from 'react-bootstrap';
import API from "../utils/api.js";



  function saveArt (artHead, artMain) {
    API.saveArticles("test")
  }

  const Results = props => {
    return (
      <Panel className="searchPnl resultsPnl">
        <h2 className="searchBnr">Results</h2>
        <ul className="list-group">
          {props.results.map(result =>
            <Panel className="resPnl" header={result.headline.main} key={result._id} bsStyle="primary">
              <div className="resTxt">
                <div>
                  <Button onClick={() => {saveArt(result.headline.main, result.snippet)}}>Saved</Button>
                </div>
                <div>
                  {result.snippet}
                </div>
              </div>
            </Panel>
          )}
        </ul>;
      </Panel>
    );
  }

export default Results;