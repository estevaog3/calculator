import { StyleSheet } from 'react-native';
import { bgColor, dimension, font, padding } from '../../styles/base';

export default StyleSheet.create({
  primary: {
    textAlign: 'center',
    backgroundColor: bgColor.primary,
    borderWidth: 0.8,
    borderColor: '#aaa',
    height: dimension.fullWidth / 4,
    width: dimension.fullWidth / 4,
    fontSize: font.lg,
    fontFamily: font.primary,
    padding: padding.md,
  },
  operator: {
    backgroundColor: bgColor.secondary,
    color: 'white',
  },
  widthMd: {
    width: dimension.fullWidth * (2 / 4),
  },
  widthLg: {
    width: dimension.fullWidth * (3 / 4),
  }
});