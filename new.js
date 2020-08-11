import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, ScrollView, TouchableOpacity,} from 'react-native';
import {Container, Header, Content, Card, CardItem, Body} from 'native-base';
import { useNavigation } from '@react-navigation/native';

function Card(props){


    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container}
        onPress={() => this.props.nav}
        >
          <Text style={styles.source} lineBreakMode={true}>
            {this.props.source.replace(' ', '\n')}
          </Text>
          <Text style={styles.title}>{this.props.title}</Text>
          <Image source={require('./live.png')} style={styles.live} />
          </TouchableOpacity>
      
    );
  
}

const styles = StyleSheet.create({
  live: {
    position: 'absolute',
    width: 10,
    height: 10,
    marginLeft: 395,
    marginTop: 5,
  },
  title: {
    color: 'black',
    fontFamily: 'PTSansNarrow-Bold',
    // fontWeight: 'bold',
    marginLeft: 140,
    fontSize: 20,
    marginTop: 10,
    marginRight: 20,
  },
  source: {
    fontSize: 17,
    marginLeft: 10,
    position: 'absolute',
    fontFamily: 'boldfont',
    color: '#8f5207',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  container: {
    marginTop: 0,
    borderWidth: 2,
    borderColor: 'black',
    borderTopWidth: 0,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
});
