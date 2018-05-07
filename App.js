import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Slider, Header } from './components'

export default class App extends Component {
  state = {
    data: [
      {
        image: 'https://www.w3schools.com/howto/img_fjords.jpg',
        title: 'Google buys HTC',
        sum: 'Lorem ipsum dolor sit amet. Lorem ipsum dlor sit ipsum dolot sit amet.'
      },
      {
        image: 'https://www.w3schools.com/w3images/lights.jpg',
        title: '2 Google buys HTC',
        sum: '2 Lorem ipsum dolor sit amet. Lorem ipsum dlor sit ipsum dolot sit amet.'
      },
      {
        image: 'https://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg',
        title: '3 Google buys HTC',
        sum: '3 Lorem ipsum dolor sit amet. Lorem ipsum dlor sit ipsum dolot sit amet.'
      },
      {
        image: 'https://www.w3schools.com/howto/img_fjords.jpg',
        title: '4 Google buys HTC 4 Google buys HTC',
        sum: '4 Lorem ipsum dolor sit amet. Lorem ipsum dlor sit ipsum dolot sit amet. Lorem ipsum dlor sit ipsum dolot sit amet.'
      },
    ]
  }

  render() {
    return (
      <View>
        <Header title="HOME SCREEN" />
        <View style={styles.innerContainer}>
          <Slider data={this.state.data} title="Latest News." />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: 10,
  }
})