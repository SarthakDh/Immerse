import React, {Component} from 'react';
import {View, Text, StyleSheet, styles, ScrollView, Button} from 'react-native';
import CheckBox from 'react-native-elements';
import Card from './quizCard';
import DropDownPicker from 'react-native-dropdown-picker';

export default class quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      lang: 'fr',
    };
  }

  updateCount(){
    count++;
    console.log(count);
  }

  render() {
    global.count = 0;
    const styles = this.getStyles();
    return (
        <ScrollView >
            <View style={styles.container}>
        
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card last = {6}/>
          
        </View>

      </ScrollView>
    );
  }


  
  getStyles() {
    return {
    belowContainer: {
        height: 100,
    },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

      },
      languageBar: {
        flexDirection: 'row',
        // justifyContent: 'center',
      },
      languageBarItem: {
        color: '#828280',
      },
    };
  }
}
