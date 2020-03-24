import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import style from './styles';

export default ({width, isOperator, label, handlePress}) => {
  let styles = [style.primary];
  if(width === 'md') styles.push(style.widthMd);
  if(width === 'lg') styles.push(style.widthLg);
  if(isOperator) styles.push(style.operator);
  return (
    <TouchableHighlight onPress={() => handlePress(label)}>
        <Text style={styles}>{label}</Text>
    </TouchableHighlight>
  );
}