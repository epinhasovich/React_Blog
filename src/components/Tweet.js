import React from 'react';
import MyAppContext from '../contexts/MyAppContext';

class Tweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweet: {
                content: '',
                date: '',
                userName: ''
            },
            counter: 0,
            disableButton: false,
            overChar: false
        }
    }


handleNewTweet(event) {
    this.setState({ tweet: { content: event.target.value }});
    if (event.target.value.length > 140){
        this.setState({
            disableButton: true,
            overChar: true
        })
    }
}


render() {
    const { tweet, disableButton, overChar } = this.state;
    return (
        <MyAppContext.Consumer>
            {context => (
            <div>
                <textarea className="messageBox"  maxLength="141" type='text' placeholder="What do you have in mind..." onChange={event => this.handleNewTweet(event)} />
                <button onClick={() => context.addTweet(tweet)} disabled={disableButton}>Tweet</button>
                <div className="over" style={{display: overChar ? '' : 'none'}}>The tweet cannot be over 140 characters</div>
            </div>
            )}
            </MyAppContext.Consumer>
        );
    }
}

export default Tweet;
    
