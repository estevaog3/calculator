import React from 'react';
import { View, Text } from 'react-native';
import style from './styles';

export default props => {
  return (
    <View style={style.wrap}>
      <Text numberOfLines={1} style={style.input}>{props.value}</Text>
    </View>
  );
}
