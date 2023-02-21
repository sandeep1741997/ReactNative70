/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


const App = () => {
  useEffect(() => {
    console.warn("HI");
    fetch('https://reqres.in/api/users?page=2')
    .then(res=>res.json())
    .then(data=>console.warn("DATA",data))
    .catch(error=>console.warn("ero",error))
  }, [])

 const getData=()=>{
  console.warn("HI2");
  fetch('https://reqres.in/api/users?page=2')
  .then(res=>res.json())
  .then(data=>console.warn("DATA",data))
  .catch(error=>console.warn("ero",error))
  console.warn("#")
  }
  
  return (
    <View>
      <Text>REACT NATIVE API CALL</Text>
      <Button onPress={getData} title={'GETDATA'}/>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
