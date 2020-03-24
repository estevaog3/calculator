import { StyleSheet } from 'react-native';
import { dimension, font, bgColor, padding } from '../../styles/base';

export default StyleSheet.create({
  wrap: {
    justifyContent: 'center',
    width: dimension.fullWidth,
    height: dimension.fullWidth / 4,
    backgroundColor: bgColor.tertiary,
    padding: padding.sm,
    flex: 1,
  },
  input: {
    width: '100%',
    textAlign: 'right',
    fontSize: font.xl,
    fontFamily: font.primary,
    color: 'white',
  }
});