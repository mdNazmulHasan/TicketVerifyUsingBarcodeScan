import React from 'react';
import { Button, Text, View, StyleSheet, Dimensions, AppSto } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { withNavigation } from 'react-navigation';
import API from '../utils/ApiClient';

class ScannerScreen extends React.Component {
   constructor(props) {
      super(props);
      this.camera = null;
      this.barcodeCodes = [];

      this.state = {
         camera: {
            type: RNCamera.Constants.Type.back,
            flashMode: RNCamera.Constants.FlashMode.auto,
            barcodeFinderVisible: true,
         },
      };
   }
   static navigationOptions = {
      header: null,
   };

   onBarCodeRead(scanResult) {
      console.log(scanResult.type);
      console.log(scanResult.data);
      this.verifyCode(scanResult.data);
      if (scanResult.data != null) {
         if (!this.barcodeCodes.includes(scanResult.data)) {
            this.barcodeCodes.push(scanResult.data);
            console.log('onBarCodeRead call');
            
         }
      }
      return;
   }

   async takePicture() {
      if (this.camera) {
         const options = { quality: 0.5, base64: true };
         const data = await this.camera.takePictureAsync(options);
         console.log(data.uri);
      }
   }
   verifyCode = (code) => {
      API.put(`${code}`, null).then(
         (response) => {
            if(response.status===200){
                this.props.navigation.dispatch({
                    key: 'StatusFromScan',
                    type: 'ReplaceCurrentScreen',
                    routeName: 'Status',
                    params: { verified: true },
                 });
            }else{
                console.log(response.data.message);
            }
            return response;
         },
         (error) => {
            console.log(error.response.data.message);
            this.props.navigation.dispatch({
                key: 'StatusFromScan',
                type: 'ReplaceCurrentScreen',
                routeName: 'Status',
                params: { verified: false,msg: error.response.data.message},
             });
            return error;
         }
      );
   };

   pendingView() {
      return (
         <View
            style={{
               flex: 1,
               backgroundColor: 'lightgreen',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            <Text>Waiting</Text>
         </View>
      );
   }

   render() {
      const { height, width } = Dimensions.get('window');
      const maskRowHeight = Math.round((height - 300) / 20);
      const maskColWidth = (width - 300) / 2;
      return (
         <View style={styles.container}>
            <RNCamera
               ref={(ref) => {
                  this.camera = ref;
               }}
               barcodeFinderVisible={this.state.camera.barcodeFinderVisible}
               barcodeFinderWidth={maskColWidth}
               barcodeFinderHeight={maskRowHeight}
               barcodeFinderBorderColor="white"
               barcodeFinderBorderWidth={2}
               defaultTouchToFocus
               flashMode={this.state.camera.flashMode}
               mirrorImage={false}
               onBarCodeRead={this.onBarCodeRead.bind(this)}
               onFocusChanged={() => {}}
               onZoomChanged={() => {}}
               permissionDialogTitle={'Permission to use camera'}
               permissionDialogMessage={'We need your permission to use your camera phone'}
               style={styles.preview}
               type={this.state.camera.type}
            >
               <View style={styles.maskOutter}>
                  <View style={[{ flex: maskRowHeight }, styles.maskRow, styles.maskFrame]} />
                  <View style={[{ flex: 30 }, styles.maskCenter]}>
                     <View style={[{ width: maskColWidth }, styles.maskFrame]} />
                     <View style={styles.maskInner} />
                     <View style={[{ width: maskColWidth }, styles.maskFrame]} />
                  </View>
                  <View style={[{ flex: maskRowHeight }, styles.maskRow, styles.maskFrame]} />
               </View>
            </RNCamera>
            <View style={[styles.overlay, styles.topOverlay]}>
               <Text style={styles.scanScreenMessage}>Please scan the barcode.</Text>
            </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
   },
   overlay: {
      position: 'absolute',
      padding: 16,
      right: 0,
      left: 0,
      alignItems: 'center',
   },
   topOverlay: {
      top: 0,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   bottomOverlay: {
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.4)',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
   },
   enterBarcodeManualButton: {
      padding: 15,
      backgroundColor: 'white',
      borderRadius: 40,
   },
   scanScreenMessage: {
      flex: 1,
      fontSize: 14,
      color: 'white',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
   },
   maskOutter: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'space-around',
   },
   maskInner: {
      width: 300,
      backgroundColor: 'transparent',
      borderColor: 'white',
      borderWidth: 1,
   },
   maskFrame: {
      backgroundColor: 'rgba(1,1,1,0.6)',
   },
   maskRow: {
      width: '100%',
   },
   maskCenter: { flexDirection: 'row' },
});
export default withNavigation(ScannerScreen);
