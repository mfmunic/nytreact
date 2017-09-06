import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';
import API from "../utils/api.js";

class Search extends Component {
  state = {
      articles: []
  };

  // Getting all quotes once the component has mounted
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


  // A helper method for rendering one panel for each quote
  renderArticles() {
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
    	<Panel className="searchPnl">
    		<h2 className="searchBnr">Saved Articles</h2>
        <ul className="list-group">
          {this.renderArticles()}
        </ul>;
    	</Panel>
    );
  }
};


export default Search;