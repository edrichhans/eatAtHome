const React = require('react-native');
const { Dimensions, Platform, StyleSheet } = React;
const deviceHeight = Dimensions.get('window').height;

'use strict';

module.exports = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
        height: '100%'
    },
    mainText: {
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    yesNoButton: {
        height: '50%',
        width: '80%',
        borderRadius: 100,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    yesNoText: {
        fontSize: 22,
    }
});