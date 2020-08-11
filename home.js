import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import {getNews} from './src/news';
import Article from './src/components/Article';

export default class reader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataScource: [''],
    };
    this.state = {articles: [], refreshing: true};
    this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    getNews()
      .then((articles) => this.setState({articles, refreshing: false}))
      .catch(() => this.setState({refreshing: false}));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true,
      },
      () => this.fetchNews(),
    );
    console.log(this.state.articles);
  }
  render() {
    return (
      <FlatList
        data={this.state.articles}
        renderItem={({item}) => <Article article={item} press = {this.props.press2} update = {this.props.update}/>}
        keyExtractor={(item) => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
      
    );
  }
  // render() {
  //   if (this.state.isLoading) {
  //     return (
  //       <View style={styles.container}>
  //         <ActivityIndicator />
  //       </View>
  //     );
  //   } else {
  //     let movies = this.state.dataScource.articles;
  //     return (
  //       <View style={styles.container}>
  //         <Text style={styles.title}>{movies[0].title}</Text>
  //         <Text style={styles.content}>{movies[0].content}</Text>
  //       </View>
  //     );
  //   }
  // }
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
