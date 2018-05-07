import { StyleSheet } from 'react-native';
import { colors } from './../../resources';
import { math } from './../../utils';

const styles = StyleSheet.create({
  item: {
    
  },
  image: {
    borderRadius: 3,
  },
  content: {
    marginTop: 10,
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  contentSum: {
    marginTop: 5,
    fontSize: 14,
    color: colors.text,
  },
  topArea: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
  },
  paginationContainer: {
    paddingVertical: 0, // Overriding the standart version of the pagination
    paddingHorizontal: 0,
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
    color: colors.text,
  },
  paginationText: {
    fontWeight: '500',
    fontSize: 18,
    color: colors.text,
  },
});

export default styles;