import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { DistanceCalculatorScreen } from './screens/DistanceCalculator';

export default class App extends React.Component<{}> {
    render() {
        return <RootStack />;
    }
}

const RootStack = StackNavigator(
    {
        DistanceCalculator: {
            screen: DistanceCalculatorScreen,
            navigationOptions: {
                title: 'Distance Calculator',
            }
        },
    },
    {
        initialRouteName: 'DistanceCalculator',
    }
);
