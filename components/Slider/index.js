import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import PropTypes from 'prop-types';
const { width, height } = Dimensions.get('window');
// Normalde module resolver kullanırım ama şu an projeye eklemedim
// https://github.com/tleunen/babel-plugin-module-resolver
import { math } from './../../utils';
import styles from './styles';

const standartItemWidth = math.wp(75) + (math.wp(2) * 2); // item width + margin for left and right

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    
    this.renderItem = this.renderItem.bind(this);
    this.onSnapToItem = this.onSnapToItem.bind(this);
  }

  onSnapToItem(index) {
    this.setState({ currentIndex: index })
  }

  renderPagination(activeIndex, total, context) {
    return <Text style={styles.paginationText}>{activeIndex + 1}/{total}</Text>
  }

  renderItem({ item, index }) {
    const { itemWidth } = this.props;

    return (
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={[styles.image, { width: itemWidth, height: itemWidth }]} />
        <View style={styles.content}>
          <Text style={styles.contentTitle} numberOfLines={1}>{ item.title }</Text>
          <Text style={styles.contentSum} numberOfLines={2}>{item.sum}</Text>
        </View>
      </View>
    );
  }

  render() {
    const { itemWidth, sliderWidth, title, data } = this.props;

    return (
      <View>
        {/* We have to override it's width because itemWidth prop is a thing which can vary */}
        <View style={[styles.topArea, { width: itemWidth }]}>
          <Text style={styles.title}>{title}</Text>
          <Pagination
            activeDotIndex={this.state.currentIndex}
            dotsLength={data.length}
            renderDots={this.renderPagination}
            containerStyle={styles.paginationContainer}
          />
        </View>
        <Carousel
          data={data}
          renderItem={this.renderItem}
          sliderWidth={sliderWidth}
          sliderHeight={250}
          itemWidth={itemWidth}
          onSnapToItem={this.onSnapToItem}
        />
      </View>
    );
  }
}

Slider.propTypes = {
  data: PropTypes.array,
  sliderWidth: PropTypes.number,
  itemWidth: PropTypes.number,
}

Slider.defaultProps = {
  data: [],
  sliderWidth: width,
  itemWidth: standartItemWidth,
}

export default Slider;