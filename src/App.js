import React from 'react';
import './App.css';
import MyAppContext from './contexts/MyAppContext';
import Tweet from './components/Tweet'
import TweetsList from './components/TweetsList';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import { getTweet, createTweet } from './lib/api';
import Profile from './components/Profile';
import { get } from 'http';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      loading: true,
      addTweet: this.handleNewTweet.bind(this),
      disableButton: true
    };
  }
  
  componentDidMount() {
    window.localStorage.setItem("Username", "Default User")
    this.getAllTweets();
    setInterval(() => this.getAllTweets (), 5000)
  }

  getAllTweets () {
    getTweet().then(response => this.setState({ tweets: response.data.tweets, loading: false, disableButton:false }))
  }

  // componentWillUnmount () {}

  handleNewTweet = (tweet) => {
    tweet.userName = window.localStorage.getItem("Username");
    tweet.date = new Date().toISOString();
    createTweet(tweet).catch(error => alert("Error! Wait until previous tweets load..."));
    const {tweets} = this.state;
    this.setState({ tweets: [tweet, ...tweets]})
  }

  render() {
    const { loading } = this.state;
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <NavBar></NavBar>
            <Switch>
              <Route exact path="/">
                <MyAppContext.Provider value={this.state}>
                  <Tweet></Tweet>
                  {loading && <h1 className="loading"><img src="https://i.gifer.com/4V0b.gif"></img></h1>}
                  {!loading && <TweetsList></TweetsList>}
                </MyAppContext.Provider>
              </Route>
              <Route exact path="/profile"><Profile></Profile> </Route>
            </Switch>
          </header>
        </div>
      </Router>
    )
  }
}

export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tweets: window.localStorage.getItem("Tweets") ? JSON.parse(window.localStorage.getItem("Tweets")): [],
//       addTweet: this.handleNewTweet.bind(this)
//     };
//   }

//   handleNewTweet = (tweet) => {
//     tweet.userName = "Eric";
//     tweet.date = new Date().toISOString();
//     let savedTweets = this.state.tweets;
//     const allTweets = [tweet, ...savedTweets]
//     window.localStorage.setItem("Tweets", JSON.stringify(allTweets));
//     this.setState({ tweets: allTweets });
//   }

// this.setState((prevState) => {
//   return { tweets: [tweet, ...prevState.tweets] }
// })
