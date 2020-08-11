import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Image} from 'react-native';
import {Card, Divider} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Translate from './translate';

export default class reader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataScource: [''],
    };
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
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    } else {
      let movies = this.state.dataScource.articles[this.props.choose];
      const urlI = movies.urlToImage;
      console.log(urlI);
      return (
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>{movies.title}</Text>
            <Image
              style={{width: 340, height: 200, margin: 10, borderRadius: 5,}}
              source={{
                uri: urlI,
              }}>

              </Image>
            <Translate translate = {movies.description + movies.content} color />
          </View>
          
        </ScrollView>
        
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 35,
    fontFamily: 'mont',
    marginTop: 10,
    marginLeft: 10,
  },
});
