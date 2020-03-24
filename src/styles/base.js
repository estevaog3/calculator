import { Dimensions } from 'react-native';

export const dimension = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
}

export const bgColor = {
  primary: '#dedede',
  secondary: '#ff9002',
  tertiary: '#4d4d4d',
}

export const font = {
  lg: 36,
  xl: 44,
  primary: 'Montserrat-Regular',
}

export const padding = {
  sm: 10,
  md: 20,
}

export const wrapButtons = {
  flexDirection: 'row',
  flexWrap: 'wrap',
}

export const wrapper = {
  flex: 1,
}