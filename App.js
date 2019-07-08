import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Proximity from 'react-native-proximity';

export default class App extends Component {
  state = {
    proximity: '',
    distance: '',
  };

  componentDidMount() {
    Proximity.addListener(data => {
      this.setState({
        proximity: data.proximity,
        distance: data.distance // Android-only
      });
    });
  }

  _proximityListener(data) {
    this.setState({
      proximity: data.proximity,
      distance: data.distance // Android-only
    });
  }

  componentWillUnmount() {
    Proximity.removeListener(data => {
      this.setState({
        proximity: data.proximity,
        distance: data.distance // Android-only
      });
    });
  }

  render() {
    const { proximity, distance } = this.state;
    return (
      <View>
        <Text>
          {proximity}
          {distance}
        </Text>
      </View>
    );
  }
}
