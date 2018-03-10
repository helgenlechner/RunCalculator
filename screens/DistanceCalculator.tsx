import React, { PureComponent } from 'react';
import { StyleSheet, ScrollView, View  } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { ConversionUtils } from '../utils/ConversionUtils';

interface State {
    km?: number;
    mi?: number;
}

export class DistanceCalculatorScreen extends PureComponent<{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = { 
            km: undefined, 
            mi: undefined 
        };

        this.onChangeText = this.onChangeText.bind(this);
    }

    onChangeText(name: 'km' | 'mi', value: string ) {
        let numericValue: number | undefined = parseFloat(value.replace(',', '.'));

        if (value === '') {
            numericValue = undefined;
        } else if (isNaN(numericValue)) {
            return;
        }

        this.setState({
            [name]: numericValue,
        });
    }

    renderResult(value: string, inputUnit: string, outputUnit: string) {
        return <Text style={styles.text}>{ inputUnit } are <Text style={styles.result}>{ value }</Text> { outputUnit }.</Text>
    }

    get kmToMiConversion() {
        const miles = this.state.km !== undefined ? ConversionUtils.kilometerToMile(this.state.km).toFixed(2) : '  ';
        return this.renderResult(miles, 'km', 'mi');
    }

    get miToKmConversion() {
        const kilometers = this.state.mi !== undefined ? ConversionUtils.mileToKilometer(this.state.mi).toFixed(2) : '  ';
        return this.renderResult(kilometers, 'mi', 'km');
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.conversion}>
                    <Input
                        keyboardType="numeric"
                        width={45}
                        containerStyle={styles.input}
                        onChangeText={(value: string) => this.onChangeText('km', value)}
                    />
                    { this.kmToMiConversion }
                </View>
                <View style={styles.conversion}>
                    <Input
                        keyboardType="numeric"
                        width={45}
                        containerStyle={styles.input}
                        onChangeText={(value: string) => this.onChangeText('mi', value)}
                    />
                    { this.miToKmConversion }
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    conversion: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
    input: {
        width: 45,
    },
    text: {
        fontSize: 16,
        marginLeft: 10,
    },
    result: {
        fontWeight: 'bold',
        fontSize: 20,
    }
});
