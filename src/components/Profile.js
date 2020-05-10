import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        }
    }

    addUser = event => {
        event.preventDefault();
        let userName = this.state.userName;
        window.localStorage.setItem("Username" , userName)
    }

    handleNewUser(event) {
        this.setState({userName: event.target.value });
    }

    render() {
        const { userName } = this.state;
        return (
            <form>
                <h1 className="profile">Profile</h1>
                <span className="userName">User Name</span>
                <textarea className="userBox"  maxLength="20" type='text'  onChange={event => this.handleNewUser(event)} />
                <button className="save" onClick={this.addUser}>Save</button>
            </form>
        );
    }
}

export default Profile;



