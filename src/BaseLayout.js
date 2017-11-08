import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class BaseLayout extends React.Component {
    render() {

        let items = [];

        for (let i = 0; i < 100; i++) {
            items.push(<Text key={i} style={[styles.text, styles.text__custom]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias consequatur ea eligendi, esse itaque laboriosam maxime, modi, nam nesciunt provident sunt tempore ut. Amet in sequi ut vitae. Quae.</Text>)
        }

        return (
            <View style={styles.root}>
                <View style={styles.header}>
                    <Text style={styles.text}>Header</Text>
                </View>
                <ScrollView style={styles.content}>
                    { items }
                </ScrollView>
                <View style={styles.footer}>
                    <Text style={styles.text}>Footer</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        backgroundColor: '#000000',
    },
    header: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    content: {
        padding: 10
    },
    footer: {
        backgroundColor: '#ffffff',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#ffffff',
        backgroundColor: '#222222'
    },
    text__custom: {
        borderWidth: 1,
        borderColor: '#ffffff',
        marginBottom: 10
    }
});
