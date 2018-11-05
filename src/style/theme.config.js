export const layout = {
   defaultPadding: 25,
};

export const typo = {
   fontFamily: 'Avenir',
   textFontSize: 15,
};

export const button = {
   height: 50,
};

export const colors = {
   shadow: 'rgb(69, 46, 19)',
   background: 'rgb(33, 35, 62)',
   background_opacity: 'rgba(33, 35, 62,0.5)',
   primary: 'rgb(76, 199, 203)',
   primary_disabled: 'rgb(44, 117, 119)',
   muted: 'rgb(141, 143, 167)',
   muted_disabled: 'rgb(92, 93, 109)',
   orange: 'rgb(243, 102, 0)',
   purple: 'rgb(168, 0, 243)',
   blue: 'rgb(25, 152, 255)',
   green: 'rgb(58, 182, 97)',
   indigo: 'rgb(107, 106, 255)',
   text: 'rgb(255, 255, 255)',
   text_muted: 'rgb(212, 212, 212)',
   gold: 'rgb(249,209,71)',
   gold_disabled: 'rgb(142,119,39)',
   danger: 'rgb(255,85,85)',
   black: 'rgb(0,0,0)',
   red: 'rgb(208,2,27)',
   alto: 'rgb(216,216,216)',
   purple:'#9454C9',
};
export const card_style = {
   fontFamily: 'Avenir',
   fontSize: 18,
   fontStyle: 'normal',
   fontWeight: 'bold',
   letterSpacing: 0.31,
   color: colors.text,
   textShadowColor: colors.shadow,
   textShadowOffset: {
      width: 0,
      height: 1,
   },
   textShadowRadius: 1,
};

export const mixins = {
   text: {
      color: colors.text,
      fontFamily: typo.fontFamily,
      fontSize: typo.textFontSize,
      fontWeight: 'normal',
   },
   buttonText: {
      color: colors.text,
      fontFamily: typo.fontFamily,
      fontSize: 20,
      fontWeight: 'normal',
   },
   title: {
      fontSize: 20,
      fontWeight: 'normal',
      fontStyle: 'normal',
      letterSpacing: 0.34,
      textAlign: 'center',
      marginBottom: 10,
   },
   subtitle: {
      fontSize: 18,
      fontWeight: 'normal',
      fontStyle: 'normal',
      letterSpacing: 0.27,
      textAlign: 'center',
      color: colors.muted,
      marginBottom: 5,
   },
   headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'normal',
      fontStyle: 'normal',
      letterSpacing: 0.34,
      textAlign: 'center',
      marginBottom: 10,
      marginTop: 10,
      width: '80%',
   },
   headerStyle: {
      height: 70,
      backgroundColor: colors.background,
      borderBottomWidth: 0,
      borderColor: 'transparent',
      elevation: 0,
   },
   horizontalLineStyle: {
      height: 2,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: colors.text,
      opacity: 0.1,
   },
   horizontalSlimLineStyle: {
      marginTop: 9.8,
      height: 1,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: colors.text,
      opacity: 0.1,
   },
   cartItemNumberText: {
      color: colors.text,
      fontFamily: typo.fontFamily,
      fontSize: typo.textFontSize,
      position: 'absolute',
      right: 0,
      top: 0,
      paddingLeft: 3,
      paddingRight: 3,
      borderRadius: 4,
      padding: 1,
      textAlign: 'center',
      backgroundColor: colors.orange,
      fontWeight: '500',
      letterSpacing: 0.23,
   },
   cartLogoStyle: {
      paddingTop: 50,
      width: 36.5,
      height: 36.5,
      resizeMode: 'contain',
   },
   headerRightCartViewContainer: {
      marginRight: 25,
      width: 45,
      height: 45,
   },
   loaderStyle: { marginTop: 20 },
   linkStyleAboveButton: {
      fontSize: 18,
      fontWeight: 'normal',
      fontStyle: 'normal',
      letterSpacing: 0.27,
      textAlign: 'center',
      color: colors.muted,
      marginBottom: 30,
   },
   actionViewStyle: { backgroundColor: colors.background },
   profileHeaderStyle: {
      borderWidth: 1,
      borderColor: colors.text,
   },
   headerRightSubStyle: {
      marginRight: 15,
   },
   inputBackground:{backgroundColor:'#302d49',padding:10,marginBottom:15}
};

// ----------------------------------------------------------------------------------
// @credits: https://medium.com/@knoland/typography-in-react-native-f09c43b5b435
const iosDynamicTypeSizes = {
   title1: {
      fontSize: 28,
      fontWeight: '300',
      lineHeight: 34,
      letterSpacing: 0.364,
   },
   title2: {
      fontSize: 22,
      fontWeight: '400',
      lineHeight: 28,
      letterSpacing: 0.352,
   },
   title3: {
      fontSize: 20,
      fontWeight: '400',
      lineHeight: 24,
      letterSpacing: 0.38,
   },
   headline: {
      fontSize: 17,
      fontWeight: '600',
      lineHeight: 22,
      letterSpacing: -0.408,
   },
   body: {
      fontSize: 17,
      fontWeight: '400',
      lineHeight: 22,
      letterSpacing: -0.408,
   },
   callout: {
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 21,
      letterSpacing: -0.32,
   },
   subhead: {
      fontSize: 15,
      fontWeight: '400',
      lineHeight: 20,
      letterSpacing: -0.24,
   },
   footnote: {
      fontSize: 13,
      fontWeight: '400',
      lineHeight: 18,
      letterSpacing: -0.078,
   },
   caption1: {
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 16,
   },
   caption2: {
      fontSize: 11,
      fontWeight: '400',
      lineHeight: 16,
      letterSpacing: 0.066,
   },
};
