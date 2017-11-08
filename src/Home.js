import React, { Component } from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';

class Home extends Component {
    render() {
        return (
            <View style={styles.root}>
                <Text>Demo</Text>
                <Button title='Base Layout' onPress={() => this.props.navigation.navigate('BaseLayout')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Home;
