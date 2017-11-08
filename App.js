import React from 'react';

import { StackNavigator } from 'react-navigation';

import Home from './src/Home';
import BaseLayout from './src/BaseLayout';

const RootNavigator = StackNavigator({
    Home: {
        screen: Home,
    },
    BaseLayout: {
        screen: BaseLayout
    }
});

export default class App extends React.Component {
    render() {

        return (
            <RootNavigator />
        );
    }
}
