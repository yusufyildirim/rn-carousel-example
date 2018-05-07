
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

// Width Percentage
function wp(percentage) {
  return Math.round((percentage * width) / 100);
}

export default {
  wp
};
