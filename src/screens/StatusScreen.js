import React from 'react';
import {
   View,
   Text,
   BackHandler,
   StyleSheet,
   Platform,
   Image,
   AsyncStorage,
   Button,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { colors, button, mixins } from '../style/theme.config';
import done from '../assets/done/done.png';
import error from '../assets/error/error.png';

class StatusScreen extends React.Component {
   constructor(props) {
      super(props);
      this.inputRef = {};
      this.state = {};
   }
   static navigationOptions = {
      header: null,
   };
   componentDidMount() {
      const { navigation } = this.props;
      const params = navigation.state.params || {};
      BackHandler.addEventListener('hardwareBackPress', function() {});
   }
   onPressScan = (navigation) => {
      navigation.dispatch({
         key: 'ScanFromStatus',
         type: 'ReplaceCurrentScreen',
         routeName: 'Scan',
      });
   };
   render() {
      const { navigation } = this.props;
      const params = navigation.state.params || {};
      let icon=null;
      let msg='';
      if(params.verified){
         icon=done;
         msg='Ticket Verified';
      }else{
        icon=error;
        msg=params.msg;
      }
      return (
         <View style={styles.container}>
            <Image source={icon} style={styles.logoImageStyle} />
            <Text style={styles.welcomeMessageStyle}>{msg}</Text>
            <Button
               onPress={() => this.onPressScan(navigation)}
               title="Scan Again"
               color="#841584"
            />
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: Platform.OS === 'ios' ? 20 : 0,
      alignItems: 'center',
      justifyContent: 'center',
   },
   submitButtonStyle: {
      ...button,
      backgroundColor: colors.orange,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
   },
   logoImageStyle: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
      marginBottom: 16,
   },
   welcomeMessageStyle: {
      ...mixins.title,
      color: colors.text,
      alignSelf: 'center',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
   },
});
export default withNavigation(StatusScreen);
