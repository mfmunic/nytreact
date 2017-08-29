import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';

class Search extends Component {
  //   state = {
  //   	topic: '',
  //   	startYear:"",
  //   	endYear:""
  // 	};

  // handleChange = event => {
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  render = () => {
    return (
    	<Panel className="searchPnl">
    		<h2 className="searchBnr">Results</h2>
    	</Panel>
    );
  }
};


export default Search;