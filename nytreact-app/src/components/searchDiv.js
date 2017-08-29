import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, HelpBlock, Panel, Button } from 'react-bootstrap';

class Search extends Component {
    state = {
    	topic: '',
    	startYear:"",
    	endYear:""
  	};

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  render = () => {
    return (
    	<Panel className="searchPnl">
    		<h2 className="searchBnr">Search</h2>
		    <form>
		        <FormGroup
		          controlId="formBasicText"
		        >
		        	<ControlLabel>Topic</ControlLabel>
		        	<FormControl
		          		name="topic"
		            	value={this.state.topic}
		            	placeholder="Enter text"
		            	onChange={this.handleChange}
		          	/>
			        <ControlLabel>Start Year</ControlLabel>
			        <FormControl
			          	name="startYear"
			            value={this.state.startYear}
			            placeholder="Enter text"
			            onChange={this.handleChange}
			        />
			        <ControlLabel>End Year</ControlLabel>
			        <FormControl
			          	name="endYear"
			            value={this.state.endYear}
			            placeholder="Enter text"
			            onChange={this.handleChange}
			        />
			        <FormControl.Feedback />
			        <Button id="searchBtn" bsStyle="primary" bsSize="large">Search</Button>
		        </FormGroup>
		    </form>
    	</Panel>
    );
  }
};


export default Search;