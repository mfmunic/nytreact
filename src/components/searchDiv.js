import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Panel, Button } from 'react-bootstrap';
import API from "../utils/api.js"
// import Results from "./resultsDiv.js"

class Search extends Component {
    state = {
    	topic: '',
    	startYear:"",
    	endYear:"",
    	results: [],
    	articles: []
  	};

	handleFormSubmit = event => {

		event.preventDefault();
		
		API.getArticles(this.state)
      		.then(res => this.setState({results:res.data.response.docs}))
      		.catch(err => console.log(`Error getting friends:  ${err}`))
	};

	handleChange = event => {
	    const value = event.target.value;
	    const name = event.target.name;
	    this.setState({
	      	[name]: value
	    });
	};

	saveArt = (artHead, artMain, artId) => {
		console.log(this.state.results)
		for(let i = 0; i<this.state.results.length; i++){
			if(this.state.results[i]._id === artId){
				this.state.results.splice([i],1)
				let newArr = this.state.results
				this.setState({results:newArr})
				this.renderSearchedArts.bind(this)
			}
		}
	   	API.saveArticles(artHead, artMain)
	   		.then(this.getSavedArts.bind(this))
  	}

  	componentDidMount() {
    	this.getSavedArts();
	}

	getSavedArts() {
	    API.getSavedArticles().then((res) => {
	      console.log(res);
	      const favoriteArts = res.data.filter(art => art.saved === true);
	      this.setState({ articles: favoriteArts });
	    });
	}

	delArt(id) {
	    API.deleteArticles(id)
	      .then(this.getSavedArts.bind(this))
	}

	renderSearchedArts = () => {
	    return this.state.results.map(result => (
			<Panel className="resPnl" header={result.headline.main} key={result._id} bsStyle="primary">
			    <div className="resTxt">
			        <div>
			            <Button 
			            	onClick={() => this.saveArt(result.headline.main, result.snippet, result._id)}
			            >Saved
			            </Button>
			        </div>
			        <div>
			            {result.snippet}
			        </div>
			    </div>
			</Panel>
		))
	}



	renderSavedArticles() {
	    console.log(this.state)
	    return this.state.articles.map(art => (
	      <Panel
	        key={art._id}
	        bsStyle="primary"
	      >
	        <div>
	          <Button onClick={() => {this.delArt(art._id)}}>Delete</Button>
	          {art.title}
	        </div>
	      </Panel>
	    ));
	 }

  	render = () => {
	    return (
	    	<div className="askedAndAnswered">
		    	<Panel className="searchPnl">
		    		<h2 className="searchBnr">Search</h2>
				    <Form>
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
							<Button onClick={this.handleFormSubmit} className="btn btn-primary searchBtn">Search</Button>
					        {/*
							<Button id="searchBtn" bsStyle="primary" bsSize="large">Search</Button>
					        */}
				        </FormGroup>
				    </Form>
		    	</Panel>

		    	<div>
			      <Panel className="searchPnl resultsPnl">
			        <h2 className="searchBnr">Results</h2>
			        <ul className="list-group">
			        	{this.renderSearchedArts()}
			        </ul>;
			      </Panel>
		    	</div>

		    	<div>
		    		<Panel className="searchPnl">
				        <h2 className="searchBnr">Saved Articles</h2>
				        <ul className="list-group">
				        	{this.renderSavedArticles()}
				        </ul>;
				    </Panel>
		    	</div>
		    </div>
	    );
  	}
};


export default Search;