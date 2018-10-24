import React, {Component} from 'react';
import AppNavigator from "./src/screens/AppNavigator";
import {Provider} from "react-redux";
import store from "./src/library/store/configureStore";


class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        );
    }
}

export default (App);
