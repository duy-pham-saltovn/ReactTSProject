import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Index(props: any) {
  const { style, enableRTL, ...rest } = props;
  return <Icon style={StyleSheet.flatten([style])} {...rest} />;
}