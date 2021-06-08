import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack'
import React from 'react'
import { Button, Image, Platform, StyleSheet, Text, View } from 'react-native'
import back_icon from '../node_modules/@react-navigation/stack/src/views/assets/back-icon.png'

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Hello, all in one!</Text>
      <Button
        onPress={() => navigation.navigate('Details')}
        title='Go to details'
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>HeaderBackButton component: </Text>
        <HeaderBackButton />
      </View>
      {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>back-icon.png (require'd): </Text>
        <Image source={require('../node_modules/@react-navigation/stack/src/views/assets/back-icon.png').default} style={styles.icon} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10 }}>
        <Text>back-icon.png (import'ed): </Text>
        <Image source={back_icon} style={styles.icon} />
      </View> */}
    </View>
  )
}

const DetailsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ fontSize: 30 }}>Details...</Text>
  </View>
)

const Stack = createStackNavigator()

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Details' component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

const styles = StyleSheet.create({
  icon: Platform.select({
    ios: {
      height: 21,
      width: 13
    },
    default: {
      height: 24,
      width: 24
    },
  })
})

export default App

// import React, {useRef, useState} from 'react';
// import {
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
//   Platform,
//   Pressable,
//   Animated,
//   Easing,
//   useColorScheme,
//   Linking,
// } from 'react-native';
// import logo from './logo.png';
// // const logo = require('./logo.png');

// const isNative = Platform.OS !== 'web';

// const App = () => {
//   const [wasRotated, setwasRotated] = useState(false);
//   const spinValue = useRef(new Animated.Value(0)).current;
//   const isDarkMode = useColorScheme() === 'dark';

//   const onPress = () => {
//     setwasRotated(!wasRotated);
//     Animated.timing(spinValue, {
//       toValue: wasRotated ? 0 : 1,
//       duration: 250,
//       easing: Easing.linear,
//       useNativeDriver: true,
//     }).start();
//   };

//   const spin = spinValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   return (
//     <View style={styles.scrollView}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={styles.scrollView}
//         contentContainerStyle={styles.scrollView}>
//         <View style={styles.container}>
//           <Animated.Image
//             source={logo}
//             style={[styles.logo, {transform: [{rotate: spin}]}]}
//           />
//           <Text style={styles.title}>Create React Native Web App</Text>
//           <Text style={styles.text}>
//             Open up src/App.js to start working on your app!
//           </Text>
//           <Text style={styles.text}>
//             Changes you make will automatically reload.
//           </Text>
//           {isNative && (
//             <Text style={styles.text}>
//               Shake your phone to open the developer menu.
//             </Text>
//           )}
//           <Text
//             style={styles.link}
//             onPress={
//               isNative
//                 ? () =>
//                     Linking.openURL(
//                       'https://github.com/necolas/react-native-web',
//                     )
//                 : undefined
//             }
//             accessibilityRole="link"
//             href="https://github.com/necolas/react-native-web"
//             target="_blank">
//             Click here to learn more about react native web
//           </Text>

//           <Pressable
//             onPress={onPress}
//             style={styles.button}
//             underlayColor={'#0A84D0'}>
//             <View>
//               <Text style={styles.buttonText}>Rotate Logo</Text>
//             </View>
//           </Pressable>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     width: '100%',
//     height: '100%',
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#282c34',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logo: {
//     width: 300,
//     height: 300,
//   },
//   title: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   text: {
//     color: '#fff',
//   },
//   link: {
//     color: '#1B95E0',
//   },
//   button: {
//     borderRadius: 3,
//     padding: 20,
//     marginVertical: 10,
//     marginTop: 10,
//     backgroundColor: '#1B95E0',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// export default App;
