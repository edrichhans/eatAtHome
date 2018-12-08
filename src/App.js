import React, { Component } from "react";
import { Root } from "native-base";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Footer from './screens/Footer/Footer'

const AppNavigator = createStackNavigator(
    {
        Footer: { screen: Footer },
    }
);


export default createAppContainer(AppNavigator);