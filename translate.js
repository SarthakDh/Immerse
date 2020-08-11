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
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  CardSwiper,
} from 'native-base';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import {AsyncStorage} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export default class PowerTranslatorDemo extends Component {
  constructor() {
    super();
    this.state = {
      languageCode: 'en',
      text: '',
      array: [''],
      lang: 'en',
      difficulty: 5,
      background: 0,
    };
  }

  handleChangeComplete = (color) => {
    this.setState({background: color.hex});
  };

  componentDidMount() {
    this.makeArray(this.state.difficulty);
  }

  render() {
    let var4 =
      'ony Chan was thinking about Jenny Zeus again. Jenny was a selfish monster with brown abs and brunette moles.Tony walked over to the window and reflected on his wild surroundings. He had always loved wild Bangkok with its mute, magnificent mountains. It was a place that encouraged his tendency to feel shocked';
    //   var var2 = var1.split(' ');
    const styles = this.getStyles();
    TranslatorConfiguration.setConfig(
      ProviderTypes.Google,
      'AIzaSyAQHlpOEuJ9tPzp8_0bDllNLdTRKKKs76g',
      this.state.languageCode,
    );
    let {text} = this.state;
    let {array} = this.state;
    let var1 = 'hello';
    const colors = ['red', 'green', 'blue', '#929e23', 'orange', 'black'];
    //   let var12 =<PowerTranslator text={var4} />;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.languageBar}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: colors[this.state.background],
            }}
            onPress={() => {
              this.setState({
                background: (this.state.background + 1) % 6,
              });
            }}
            onPressOut={() => {
              this.makeArray(this.state.difficulty);
            }}></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 80,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#660101',
              color: 'white',
              justifyContent: 'center',
              alignContent: 'center',
              marginLeft: 5,
            }}
            onPressIn={() => {
              this.changeLanguage('en');
              this.makeArray(this.state.difficulty);
            }}
            onPressOut={() => {
              this.changeLanguage(this.state.lang);
              this.makeArray(this.state.difficulty);
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                marginLeft: 12,
                fontFamily: 'boldfont',
              }}>
              BAIL
            </Text>
          </TouchableOpacity>

          <DropDownPicker
            items={[
              {label: 'Hard', value: 3},
              {label: 'Medium', value: 5},
              {label: 'Easy', value: 7},
            ]}
            placeholder="Level"
            containerStyle={{height: 40, width: 90, marginLeft: 5}}
            dropDownMaxHeight={120}
            style={{backgroundColor: '#ffffff'}}
            dropDownStyle={{backgroundColor: 'white', height: 400}}
            onChangeItem={(item) => {
              this.setState({
                difficulty: item.value,
              });
              this.changeLanguage(this.state.lang);
              this.makeArray(this.state.difficulty);
            }}
          />
          <DropDownPicker
            items={[
              {label: 'French', value: 'fr'},
              {label: 'English', value: 'en'},
              {label: 'Russian', value: 'ru'},
              {label: 'Spanish', value: 'es'},
              {label: 'Hindi', value: 'hi'},
              {label: 'Japanese', value: 'ja'},
              {label: 'Korean', value: 'ko'},
              {label: 'Latin', value: 'la'},
              {label: 'AutoDetect', value: 'auto'},
              {label: 'Afrikaans', value: 'af'},
              {label: 'Albanian', value: 'sq'},
              {label: 'Amharic', value: 'am'},
              {label: 'Arabic', value: 'ar'},
              {label: 'Armenian', value: 'hy'},
              {label: 'Azerbaijani', value: 'az'},
              {label: 'Basque', value: 'eu'},
              {label: 'Belarusian', value: 'be'},
              {label: 'Bengali', value: 'bn'},
              {label: 'Bosnian', value: 'bs'},
              {label: 'Bulgarian', value: 'bg'},
              {label: 'Catalan', value: 'ca'},
              {label: 'Cebuano', value: 'ceb'},
              {label: 'Chichewa', value: 'ny'},
              {label: 'ChineseSimplified', value: 'zh-cn'},
              {label: 'ChineseTraditional', value: 'zh-tw'},
              {label: 'Corsican', value: 'co'},
              {label: 'Croatian', value: 'hr'},
              {label: 'Czech', value: 'cs'},
              {label: 'Danish', value: 'da'},
              {label: 'Dutch', value: 'nl'},
              {label: 'English', value: 'en'},
              {label: 'Esperanto', value: 'eo'},
              {label: 'Estonian', value: 'et'},
              {label: 'Filipino', value: 'tl'},
              {label: 'Finnish', value: 'fi'},
              {label: 'French', value: 'fr'},
              {label: 'Frisian', value: 'fy'},
              {label: 'Galician', value: 'gl'},
              {label: 'Georgian', value: 'ka'},
              {label: 'German', value: 'de'},
              {label: 'Greek', value: 'el'},
              {label: 'Gujarati', value: 'gu'},
              {label: 'HaitianCreole', value: 'ht'},
              {label: 'Hausa', value: 'ha'},
              {label: 'Hawaiian', value: 'haw'},
              {label: 'Hebrew', value: 'iw'},
              {label: 'Hindi', value: 'hi'},
              {label: 'Hmong', value: 'hmn'},
              {label: 'Hungarian', value: 'hu'},
              {label: 'Icelandic', value: 'is'},
              {label: 'Igbo', value: 'ig'},
              {label: 'Indonesian', value: 'id'},
              {label: 'Irish', value: 'ga'},
              {label: 'Italian', value: 'it'},
              {label: 'Japanese', value: 'ja'},
              {label: 'Javanese', value: 'jw'},
              {label: 'Kannada', value: 'kn'},
              {label: 'Kazakh', value: 'kk'},
              {label: 'Khmer', value: 'km'},
              {label: 'Korean', value: 'ko'},
              {label: 'Kurdish(Kurmanji)', value: 'ku'},
              {label: 'Kyrgyz', value: 'ky'},
              {label: 'Lao', value: 'lo'},
              {label: 'Latin', value: 'la'},
              {label: 'Latvian', value: 'lv'},
              {label: 'Lithuanian', value: 'lt'},
              {label: 'Luxembourgish', value: 'lb'},
              {label: 'Macedonian', value: 'mk'},
              {label: 'Malagasy', value: 'mg'},
              {label: 'Malay', value: 'ms'},
              {label: 'Malayalam', value: 'ml'},
              {label: 'Maltese', value: 'mt'},
              {label: 'Maori', value: 'mi'},
              {label: 'Marathi', value: 'mr'},
              {label: 'Mongolian', value: 'mn'},
              {label: 'Myanmar(Burmese)', value: 'my'},
              {label: 'Nepali', value: 'ne'},
              {label: 'Norwegian', value: 'no'},
              {label: 'Pashto', value: 'ps'},
              {label: 'Persian', value: 'fa'},
              {label: 'Polish', value: 'pl'},
              {label: 'Portuguese', value: 'pt'},
              {label: 'Punjabi', value: 'ma'},
              {label: 'Romanian', value: 'ro'},
              {label: 'Russian', value: 'ru'},
              {label: 'Samoan', value: 'sm'},
              {label: 'ScotsGaelic', value: 'gd'},
              {label: 'Serbian', value: 'sr'},
              {label: 'Sesotho', value: 'st'},
              {label: 'Shona', value: 'sn'},
              {label: 'Sindhi', value: 'sd'},
              {label: 'Sinhala', value: 'si'},
              {label: 'Slovak', value: 'sk'},
              {label: 'Slovenian', value: 'sl'},
              {label: 'Somali', value: 'so'},
              {label: 'Spanish', value: 'es'},
              {label: 'Sundanese', value: 'su'},
              {label: 'Swahili', value: 'sw'},
              {label: 'Swedish', value: 'sv'},
              {label: 'Tajik', value: 'tg'},
              {label: 'Tamil', value: 'ta'},
              {label: 'Telugu', value: 'te'},
              {label: 'Thai', value: 'th'},
              {label: 'Turkish', value: 'tr'},
              {label: 'Ukrainian', value: 'uk'},
              {label: 'Urdu', value: 'ur'},
              {label: 'Uzbek', value: 'uz'},
              {label: 'Vietnamese', value: 'vi'},
              {label: 'Welsh', value: 'cy'},
              {label: 'Xhosa', value: 'xh'},
              {label: 'Yiddish', value: 'yi'},
              {label: 'Yoruba', value: 'yo'},
              {label: 'Zulu', value: 'zu'},
            ]}
            searchable={true}
            searchablePlaceholder="Search "
            searchablePlaceholderTextColor="gray"
            seachableStyle={{}}
            searchableError={() => <Text>Not Found</Text>}
            placeholder="Language"
            containerStyle={{
              height: 40,
              width: 125,
              marginLeft: 5,
            }}
            dropDownMaxHeight={300}
            style={{backgroundColor: '#ffffff'}}
            dropDownStyle={{backgroundColor: 'white', height: 400}}
            onChangeItem={(item) => {
              this.setState({
                lang: item.value,
              });
              this.changeLanguage(item.value);
              this.makeArray(this.state.difficulty);
            }}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inside}>
            {this.state.array[0]}
            {this.state.array[1]}
            {this.state.array[2]}
            {this.state.array[3]}
            {this.state.array[4]}
            {this.state.array[5]}
            {this.state.array[6]}
            {this.state.array[7]}
            {this.state.array[8]}
            {this.state.array[9]}
            {this.state.array[10]}
            {this.state.array[11]}
            {this.state.array[12]}
            {this.state.array[13]}
            {this.state.array[14]}
            {this.state.array[15]}
            {this.state.array[16]}
            {this.state.array[17]}
            {this.state.array[18]}
            {this.state.array[19]}
            {this.state.array[20]}
            {this.state.array[21]}
            {this.state.array[22]}
            {this.state.array[23]}
            {this.state.array[24]}
            {this.state.array[25]}
            {this.state.array[26]}
            {this.state.array[27]}
            {this.state.array[28]}
            {this.state.array[29]}
            {this.state.array[30]}
            {this.state.array[31]}
            {this.state.array[32]}
            {this.state.array[33]}
            {this.state.array[34]}
            {this.state.array[35]}
            {this.state.array[36]}
            {this.state.array[37]}
            {this.state.array[38]}
            {this.state.array[39]}
            {this.state.array[40]}
            {this.state.array[41]}
            {this.state.array[42]}
            {this.state.array[43]}
            {this.state.array[44]}
            {this.state.array[45]}
            {this.state.array[46]}
            {this.state.array[47]}
            {this.state.array[48]}
            {this.state.array[49]}
            {this.state.array[50]}
            {this.state.array[51]}
            {this.state.array[52]}
            {this.state.array[53]}
            {this.state.array[54]}
            {this.state.array[55]}
            {this.state.array[56]}
            {this.state.array[57]}
            {this.state.array[58]}
            {this.state.array[59]}
            {this.state.array[60]}
            {this.state.array[61]}
            {this.state.array[62]}
            {/* {this.state.array[63]} */}
            {/* {this.state.array[64]} */}
            {/* {this.state.array[65]} */}
            {/* {this.state.array[66]}
            {this.state.array[67]}
            {this.state.array[68]}
            {this.state.array[69]}
            {this.state.array[70]}
            {this.state.array[71]}
            {this.state.array[72]}
            {this.state.array[73]}
            {this.state.array[74]}
            {this.state.array[75]}
            {this.state.array[76]}
            {this.state.array[77]}
            {this.state.array[78]}
            {this.state.array[79]}
            {this.state.array[80]}
            {this.state.array[81]}
            {this.state.array[82]}
            {this.state.array[83]}
            {this.state.array[84]}
            {this.state.array[85]}
            {this.state.array[86]}
            {this.state.array[87]}
            {this.state.array[88]}
            {this.state.array[89]}
            {this.state.array[90]} */}
            {/* {var12} */}
          </Text>
        </View>
      </ScrollView>
    );
  }

  getStyles() {
    return {
      secondCon: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      },
      inside: {
        marginLeft: 20,
        marginRight: 10,
        marginTop: 0,
      },
      colored: {
        color: 'green',
      },
      translated: {
        color: 'orange',
      },
      new: {
        backgroundColor: 'lightgreen',
        borderRadius: 50,
        color: 'white',
        margin: 20,
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      },
      header: {
        marginBottom: 1,
      },
      title: {
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: 38,
        lineHeight: 38,
      },
      subtitle: {
        color: '#B3B3B3',
      },
      p: {
        color: 'black',
        lineHeight: 24,
        backgroundColor: 'lightblue',
        borderRadius: 30,
        padding: 15,
      },
      languageBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
      },
      languageBarItem: {
        color: '#828280',
      },
    };
  }

  changeLanguage(languageCode) {
    this.setState({languageCode: languageCode});
  }

  makeArray() {
    var para = this.props.translate;
    // console.log(paragraph);
    if (para != '') {
      var curr = para.split(' ');
    } else {
      var curr = ['This', 'text', 'could', 'not', 'load', 'properly.'];
    }

    const colors = ['red', 'green', 'blue', '#929e23', 'orange', 'black'];
    for (var i = 0; i < curr.length; i++) {
      if (i % this.state.difficulty == 0) {
        var temp = curr[i] + '    ';
        curr[i] = (
          <PowerTranslator
            style={{
              color: colors[this.state.background],
              margin: 0,
              fontSize: 22,
              fontFamily: 'Oswald',
            }}
            text={temp}
          />
        );
      } else {
        curr[i] = (
          <Text
            style={{
              color: 'black',
              margin: 0,
              fontSize: 22,
              fontFamily: 'Oswald',
            }}>
            {' '}
            {curr[i]}{' '}
          </Text>
        );
      }
    }
    // console.log(curr);
    var stringMade = curr.join();
    // console.log(stringMade);
    this.setState({array: curr});
    // console.log(typeof this.state.array[0]);
  }
  printArray() {}
}
