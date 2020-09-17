// PLUGINS IMPORTS //
import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  color?: string;
  size?: number;
  lineHeight?: number;
  isBold?: boolean;
  isCenterAlign?: boolean;

  style?: any;
  onPress?: () => void;
};

const TextBody: React.FC<PropsType> = (props) => {
  return (
    <Text
      style={[
        props.style,
        {
          color: props.color || 'black',
          fontSize: props.size || 15,
          fontFamily: props.isBold ? 'Bold' : 'Light',
          textAlign: props.isCenterAlign && 'center',
          lineHeight: props.lineHeight,
        },
        props.onPress && styles.link,
      ]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  link: {
    textDecorationLine: 'underline',
    color: '#488DF5',
  },
});

const TextComponent: React.FC<PropsType> = (props) => {
  if (props.onPress) {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <TextBody {...props}>{props.children}</TextBody>
      </TouchableOpacity>
    );
  } else {
    return <TextBody {...props}>{props.children}</TextBody>;
  }
};

export default TextComponent;
