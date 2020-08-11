import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {useNavigation, useLinkProps} from '@react-navigation/native';

function hello(props) {

  const navigation = useNavigation();
    return (
        <View style={styles.header}>
        <Image source = {require('./assets/translate.png')} style={{width: 40, height: 40, marginLeft: 15, marginTop: 10,}}/>
          <Text style={styles.theText}>{props.title}</Text>
          <TouchableOpacity
            style={{
              marginTop: 8,
              marginLeft: 160,
              width: 40,
              height: props.height,
              borderRadius: 25,
              backgroundColor: '#2aa118',
              color: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
            }}
            onPress={() => {
              navigation.navigate('Quiz');
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                fontFamily: 'boldfont',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              Q
            </Text>
          </TouchableOpacity>
        </View>
    );
  
}

const styles = StyleSheet.create({
    theText: {
      color: 'white',
      fontSize: 30,
      marginTop: 7,
      fontFamily: 'boldfont',
      marginLeft: 7,
      
    },
    header: {
        marginLeft: -20,
      height: 55,
      backgroundColor: '#660101',
      flexDirection: 'row',
      width: 900,
    },
    container: {
      flex: 1,
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
  });


  export default hello;
