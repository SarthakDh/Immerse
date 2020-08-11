import React, {Component, useState} from 'react';
import {
  PowerTranslator,
  ProviderTypes,
  TranslatorConfiguration,
} from 'react-native-power-translator';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
  ActivityIndicator,
  Button,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
export default class PowerTranslatorDemo extends Component {
  constructor() {
    super();
    this.state = {
      languageCode: 'es',
      isLoading: true,
      text: '',
      array: [''],
      lang: 'en',
      difficulty: 5,
      dataScource: [''],
      wrongCount: 0,
      display: 'none'
    };
    global.count = 0;
  }

  

  randomColor(){
    const colors = ['#ff867d', '#ffdc7d', '#7dff91', '#7df9ff', '#7d9eff', '#cb7dff', '#fa8993'];
    return colors[Math.floor(Math.random() * 7)];
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  renderButton(){
    const styles = this.getStyles();
    // var score = 100 - ({count} * 5.5);
    if(this.props.last == 6){
    return (
      <View style = {{alignItems: 'center',}}>
      <TouchableOpacity
        style={styles.buttonLast}
        onPress={() => {
          {this.setState({
            wrongCount: count,
            display: 'flex',
          })}
        }}>
          <Text style = {styles.ButtonTextLast}>
            REVEAL SCORE
          </Text>
        </TouchableOpacity>
        <View style = {{height: 480}}>
        <View style = {styles.reveal}>
          <View style = {{alignItems: 'center',}}>
          <Text style = {styles.score}>
            {100 -  (5.5 * count)}%
          </Text>
          </View>
          <Text style = {styles.incorect}>
            Incorect Answers Chosen: 
          </Text>
          <Text style = {styles.incorectRed}>
            {count}
          </Text>
          <Text  style = {styles.message}>
            {this.renderMessage(count)}
          </Text>
          </View>
        </View>
        </View>
        
    )
      }
  }

  renderMessage(num){
    if(num == 0){
      return (
        <Text>
          Great job! You got a perfect score! Keep practicing to get even better!
        </Text>
      )
    }
    else if (num <= 4) {
      return (
        <Text>
          Good job! You did pretty well, but there is room to grow. You got it!
        </Text>
      )
    }
    else {
      return (
        <Text>
          Practice! Practice! Practice! You have to get that score up!
        </Text>
      )
    }
  }

  componentDidMount() {
    var url =
      'http://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=be036077cd7e4dfea7c76f9b933fa43f';
    var req = new Request(url);
    return fetch(req)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataScource: responseJson,
          otherData: responseJson,
        });
        // console.log(responseJson.articles);
        // console.log(typeof this.state.dataScource);
      });
  }
  render() {
    const styles = this.getStyles();
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    } else {
      let main = this.state.dataScource.articles[1];
      let main2 = this.state.dataScource.articles[2];
      let main3 = this.state.dataScource.articles[3];
      let main4 = this.state.dataScource.articles[4];
      let main5 = this.state.dataScource.articles[5];
      let words = main.description + ' ' + main2.description + ' ' + main3.description + ' ' + main4.description + ' ' + main5.description;
      words = words.replace('.', '');
      words = words.replace(',', '');
      words = words.replace('"', '');
      let wordsArr = words.split(' ');
      let wordsLength = wordsArr.length;
      let answerIndex = Math.floor(Math.random() * wordsLength - 1);
      let answer = wordsArr[answerIndex];
      TranslatorConfiguration.setConfig(
        ProviderTypes.Google,
        'AIzaSyAQHlpOEuJ9tPzp8_0bDllNLdTRKKKs76g',
        this.state.languageCode,
      );
      let renders = [<TouchableOpacity
        style={styles.button}
        onPress={() => {
            alert('Wrong answer! Try again!');
            count++;
            console.log(count);
        }}>
          <Text style = {styles.ButtonText}>{wordsArr[Math.floor(Math.random() * wordsLength - 1)]}</Text>
        </TouchableOpacity>,  <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  alert('Wrong answer! Try again!');
                  count++;
                }}>
                  <Text style = {styles.ButtonText}>{wordsArr[Math.floor(Math.random() * wordsLength - 1)]}</Text>
                </TouchableOpacity>,   <TouchableOpacity
          style={styles.button}
          onPress={() => {
            alert('Wrong answer! Try again!');
            count++;
          }}>
            <Text style = {styles.ButtonText}>{wordsArr[Math.floor(Math.random() * wordsLength - 1)]}</Text>
          </TouchableOpacity>,           <TouchableOpacity
          style={styles.button}
          onPress={() => {
            alert('Good job! You got it!');
          }}>
            <Text style = {styles.ButtonText}>{answer}</Text>
          </TouchableOpacity>];
          renders = this.shuffle(renders);

      return (
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.text}>
              <PowerTranslator
                style={{
                  color: 'black',
                  margin: 0,
                  fontSize: 30,
                  fontFamily: 'Oswald',
                }}
                text={answer}
              />
              :
            </Text>
            <View style={styles.horizontal}>
              {renders[0]}
              {renders[1]}
            </View>
            <View style={styles.horizontal}>
              {renders[2]}
              {renders[3]}
            </View>
          </View>
          {this.renderButton()}
                
        </ScrollView>
      );
    }
  }

  getStyles() {
    return {
      message: {
        fontSize: 30,
        fontFamily: 'Oswald',
        margin: 10,
      },
      score: {
        color: 'green',
        fontSize: 60,
        fontFamily: 'boldfont',
        margin: 10,
        marginBottom: -20,
      },
      incorectRed: {
        color: 'red',
        fontSize: 30,
        fontFamily: 'Oswald',
        margin: 10,
        marginTop: -10,
      },
      incorect: {
        fontSize: 25,
        fontFamily: 'Oswald',
        margin: 10,
        marginBottom: 0,
      },
      reveal: {
        display: this.state.display,
        height: 500,
        width: 345,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 30,
        flex: 1,
        borderWidth: 4,
        borderColor: "#20232a",
        paddingBottom: 10,
        backgroundColor: '#a39f9e',
      },
      buttonLast: {
        backgroundColor: '#2aa118',
        height: 50,
        width: 250,
        borderRadius: 5,
        marginTop: 10, 
        borderColor: "#20232a",
        alignItems: 'center',
        marginBottom: 20,
      },
      ButtonTextLast: {
        marginTop: 6,
        color: 'white',
        fontSize: 30,
        fontFamily: 'boldfont',
        margin: 0,
      },
      cardCon: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      },
      ButtonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Oswald',
        margin: 0,
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        alignContent: 'center',
      },
      button: {
        backgroundColor: '#660101',
        height: 40,
        width: 120,
        borderRadius: 20,
        marginTop: 10, 
        borderWidth: 2,
        borderColor: "#20232a",
        alignItems: 'center',
      },
      text: {
        color: 'black',
        fontSize: 30,
        fontFamily: 'Oswald',
        marginLeft: 20,
        marginTop: 5,
      },
      belowContainer: {
        height: 300,
      },
      container: {
        backgroundColor: this.randomColor(),
        width: 345,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 30,
        flex: 1,
        borderWidth: 4,
        borderColor: "#20232a",
        paddingBottom: 10,
      },
      languageBar: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
      languageBarItem: {
        color: '#828280',
      },
    };
  }

  changeLanguage(languageCode) {
    this.setState({languageCode: languageCode});
  }
}
