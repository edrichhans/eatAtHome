import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import Home from '../Home/Home';
import Info from '../Info/Info';

const MainScreenNavigator = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Info: { screen: Info },
    //Profile: { screen: Profile }
  },
  {
    initialRouteName: "Home",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigation.getParam('selectedTab', 'Home') == 'Home'}
              onPress={() => {
                props.navigation.setParams({selectedTab: 'Home'});
                props.navigation.navigate('Home');
              }}>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.getParam('selectedTab', 'Home') == 'Info'}
              onPress={() => {
                props.navigation.setParams({selectedTab: 'Info'});
                props.navigation.navigate('Info');
              }}>
              <Icon name="pie" />
              <Text>Info</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.getParam('selectedTab', 'Home') == 'Family'}
              onPress={() => {
                props.navigation.setParams({selectedTab: 'Family'});
                props.navigation.navigate('Family');
              }}>
              <Icon name="people" />
              <Text>Family</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.getParam('selectedTab', 'Home') == 'Profile'}
              onPress={() => {
                props.navigation.setParams({selectedTab: 'Profile'});
                props.navigation.navigate('Profile');
              }}>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
    }
  }
);

export default createAppContainer(MainScreenNavigator);

// export default class MainScreenNavigator extends Component {
//   render() {
//     return (
//       <Container>
//         <Header />
//         <Content />

//       </Container>
//     );
//   }
// }