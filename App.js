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
    const data = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Text>{item.commit.author.name}</Text>
          )}
        />

      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
