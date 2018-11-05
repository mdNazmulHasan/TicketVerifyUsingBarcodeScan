import React from 'react';
import { View, Text, Platform, StatusBar, Dimensions, SafeAreaView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ScannerScreen from './src/screens/ScannerScreen';
import StatusScreen from './src/screens/StatusScreen';
import { colors, button, mixins } from './src/style/theme.config';

const RootStack = createStackNavigator(
   {
      Scan: ScannerScreen,
      Status: StatusScreen,
   },
   {
      initialRouteName: 'Scan',
      headerMode: 'screen',
   }
);

const prevGetStateForActionHomeStack = RootStack.router.getStateForAction;
RootStack.router.getStateForAction = (action, state) => {
   if (state && action.type === 'ReplaceCurrentScreen') {
      const routes = state.routes.slice(0, state.routes.length - 1);
      routes.push(action);
      return {
         ...state,
         routes,
         index: routes.length - 1,
      };
   }
   return prevGetStateForActionHomeStack(action, state);
};

export default class App extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <StatusBar backgroundColor={colors.background} barStyle="light-content" />
            <RootStack />
         </SafeAreaView>
      );
   }
}
