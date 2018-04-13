import React, { Component } from 'react';
import{ View } from 'react-native';
import firebase from 'firebase';
import{ Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import { APIKey } from './Keys';


class App extends Component {

    state = { loggedIn: null }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: APIKey,
            authDomain: "authreactnat.firebaseapp.com",
            databaseURL: "https://authreactnat.firebaseio.com",
            projectId: "authreactnat",
            storageBucket: "authreactnat.appspot.com",
            messagingSenderId: "823103369316"
          });

          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
          });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case false:
                return <LoginForm/>;
            case true:
                return (
                <Button onPress={() => firebase.auth().signOut()}>
                    Log Out
                </Button>
                );
            default:
                return <Spinner size="large" />;
        }

    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;