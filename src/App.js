import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const mobile = 'MobileNet';
const ssd = 'SSD MobileNet';
const yolo = 'Tiny YOLOv2';
const deeplab = 'Deeplab';
const posenet = 'PoseNet';

export default class App extends Component {
    render() {

        var renderButton = (m) => {
            return (
                <Button
                    title={m}
                    buttonStyle={styles.button} 
                    onPress={this.onSelectModel}
                />
            );
        }

        return (
            <LinearGradient 
                colors={['#1e1e1e', '#222']} 
                style={styles.linearGradient}
            >
                <View>
                    {renderButton(mobile)}
                    {renderButton(ssd)}
                    {renderButton(yolo)}
                    {renderButton(deeplab)}
                    {renderButton(posenet)}
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 200,
        height: 50,
        margin: 5
    }
});