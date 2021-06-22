import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch('https://api.github.com/repos/rajeshgv1186/ReactNativeDemo/commits')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((error) => console.error(error))
  }
  render() {
    const data = this.state.data;
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          inverted={true}
          keyExtractor={({ sha }, index) => sha}
          renderItem={({ item }) => (
            <Text style={styles.item}><Text style={styles.textbold}>Author: </Text>{item.commit.author.name} 
            {'\n'}
            <Text style={styles.textbold}>SHA: </Text>{item.sha} 
            {'\n'}
            <Text style={styles.textbold}>Message: </Text>{item.commit.message} 
            </Text>
            
          )}
        />

      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    paddingLeft:'5%',
    paddingTop:'15%',
    backgroundColor: '#fff',
  },
  item: {
    padding: 10,
    fontSize: 18,
  },
  textbold:{
    fontWeight:'bold'
  }
});
