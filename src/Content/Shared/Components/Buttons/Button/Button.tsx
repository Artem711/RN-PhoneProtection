// PLUGINS IMPORTS //
import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////
type PropsType = {
  removeUppercase?: boolean;
  backgroundColor?: string;
  textColor?: string;
  textSize?: number;
  style?: any;

  text?: string;
  onPress?: () => void;
};
const Button: React.FC<PropsType> = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress && props.onPress()}
      style={[
        styles.wrapper,
        {
          backgroundColor: props.backgroundColor || '#FFC107',
        },
        props.style,
      ]}>
      <Text
        color={props.textColor || 'black'}
        size={props.textSize || 18}
        isCenterAlign>
        {props.removeUppercase ? props.text : props.text?.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 2000,
  },
});

export default React.memo(Button);
