import { StyleSheet, TextInput, ViewStyle } from 'react-native';

import React from 'react';

type TextInputProps = {
  onTextChange?: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeHolder?: string;
  placeHolderTextColor?: string;
  containerStyle?: ViewStyle;
  value?: any;
  secureTextEntry?: boolean;
  keyboardType?: any;
  editable?: boolean;
};

const TextImput = (props: TextInputProps) => {
  return (
    <TextInput
      style={[styles.cotainer, props.containerStyle]}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      placeholder={props.placeHolder}
      placeholderTextColor={props.placeHolderTextColor}
      value={props.value}
      onChangeText={props.onTextChange}
      secureTextEntry={props.secureTextEntry}
      keyboardType={props.keyboardType}
      editable={props.editable}
    />
  );
};

export default TextImput;

const styles = StyleSheet.create({
  cotainer: {
    width: '100%',
    height: 50,
  },
});
