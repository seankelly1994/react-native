import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Sean'

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native</Text>
            <Text style={styles.subHeaderStyle}>My Name is {name}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'blue'
    },
    subHeaderStyle: {
        fontSize: 22
    }
});

export default ComponentsScreen;