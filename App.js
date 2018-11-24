/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Setup from './src/Setup';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curDate: 0,
    };
    this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  }

  componentDidMount() {
    setInterval(() => {
      var date = new Date();
      this.setState({
        curDate: this.months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear(),
        curTime: ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2)
      })
    }, 1000)
  }

  render() {
    return <Setup
      screenProps={{
        curDate: this.state.curDate,
        curTime: this.state.curTime,
      }}
     />;
  }
}

// import React from "react";
// import { View, Text } from "react-native";
// import { createStackNavigator, createAppContainer } from "react-navigation";

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }
// }

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   }
// });

// export default createAppContainer(AppNavigator);

// export default class App extends Component {
//   render() {
//     closeDrawer = () => {
//       this.drawer._root.close()
//     };
//     openDrawer = () => {
//       this.drawer._root.open()
//     };
//     return (
//       <Drawer
//         ref={(ref) => { this.drawer = ref; }}
//         content={<SideBar navigator={this.navigator} />}
//         onClose={() => this.closeDrawer()} >
//       // Main View
//       </Drawer>
//     );
//   }
// }

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
