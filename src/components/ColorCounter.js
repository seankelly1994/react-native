import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import ColorScreen from '../screens/ColorScreen';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text>{ color }</Text>
            <Button onPress={() => onIncrease()} title={`Increase ${color}`}/>
            <Button onPress={() => onDecrease()} title={`Decrease ${color}`}/>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default ColorCounter;