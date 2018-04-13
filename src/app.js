import React, { Component } from 'react';
import{ View } from 'react-native';
import firebase from 'firebase';
import{ Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyC2031YV4vHwVFJTa0qkob1PBnFA0zYOE8",
            authDomain: "authreactnat.firebaseapp.com",
            databaseURL: "https://authreactnat.firebaseio.com",
            projectId: "authreactnat",
            storageBucket: "authreactnat.appspot.com",
            messagingSenderId: "823103369316"
          })
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm/>
            </View>
        );
    }
}

export default App;