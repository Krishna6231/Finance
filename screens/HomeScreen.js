// screens/HomeScreen.js

import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const HomeScreen = () => {
  return (

    <View style={{ marginTop: StatusBar.currentHeight, flex: 0, backgroundColor: 'blue' }}>
        <View>
            <Text style={{textAlign: 'center', justifyContent: 'center', paddingVertical: 20, color: 'white', fontWeight: 'Italic', font: 'cursive'}}>Home Screen</Text>
        </View>
    </View>
    
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     color: 'black',
//   },
// });

export default HomeScreen;
