import React from 'react';
import MyAppContext from '../contexts/MyAppContext';

class TweetsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <MyAppContext.Consumer>
                {({ tweets }) => (
                    <div >
                        {tweets.map(tweet => (
                            <div className="message">
                                <span className="username">{tweet.userName}</span>
                                <span className="date">{tweet.date}</span>
                                <p key={tweet.content}>{tweet.content}</p>
                            </div>
                        ))} 
                    </div>
                )}
            </MyAppContext.Consumer>
        )
    }
}

export default TweetsList;

