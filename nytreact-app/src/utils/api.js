import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "02bae414f0b840cfa037ba9a60bc5139";
let apiUrl = "http://localhost:5000"
if(process.env.NODE_ENV === 'production') {
  apiUrl = ""
} 

export default {
  getArticles: (data) => {
    return axios.get(`${BASEURL}?api-key=${APIKEY}&q=${data.topic}&begin_date=${data.startYear}0101&end_date=${data.endYear}0101`);
  },
  // Retrieves all quotes from the db
  getSavedArticles: function() {
    return axios.get(`${apiUrl}/api/articles`);
  },
  // Saves a new quote to the db
  saveArticles: function(headLine, paragraph) {
    return axios.post(`${apiUrl}/api/articles`, { title: headLine, snippet: paragraph, saved: true });
  },
  // Deletes a quote from the db
  deleteArticles: function(id) {
    return axios.delete(`${apiUrl}/api/articles/${id}`);
  },

};