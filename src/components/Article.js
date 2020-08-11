import React from 'react';
import { View, Linking, TouchableNativeFeedback } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

function hello(props) {

    const {
      title,
      description,
      publishedAt,
      source,
      urlToImage,
      url
    } = props.article;
    const { noteStyle, featuredTitleStyle } = styles;
    const time = moment(publishedAt || moment.now()).fromNow();
    const defaultImg =
      'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';
    
    const navigation = useNavigation();
    return (
      <TouchableNativeFeedback
        useForeground
        onPress={() => {
          navigation.navigate(props.press);
          navigation.setParams({ name: props.update});
        }}
      >
        
        <Card
          featuredTitle = {title}
          featuredTitleStyle={featuredTitleStyle}
          image={{
            uri: urlToImage || defaultImg
          }}
        >
          <Divider style={{ backgroundColor: '#dfe6e9' }} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{fontFamily: 'bldfont', fontWeight: 'bold', }}>{source.name.toUpperCase()}</Text>
            <Text style={noteStyle}>{time}</Text>
          </View>
        </Card>
      </TouchableNativeFeedback>
    );
  
}

const styles = {
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3,
  }
};

export default hello;