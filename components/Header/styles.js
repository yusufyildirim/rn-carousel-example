import { StyleSheet } from 'react-native';
import { colors } from './../../resources';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20, // Statusbar height,
    backgroundColor: colors.primary,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  }
});

export default styles;