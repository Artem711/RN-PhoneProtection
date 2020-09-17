// PLUGINS IMPORTS //
import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';

// COMPONENTS IMPORTS /

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  isPayment?: boolean;
  style?: any;

  text: string;
  subText?: string;
  leftIcon?: any;
  rightIcon?: any;

  isSelected: boolean;
  onPress: () => void;
};
const SelectButton: React.FC<PropsType> = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.wrapper,
        props.style,
        props.isSelected && {borderColor: '#FFC107', borderWidth: 1},
      ]}>
      <Image
        source={
          props.leftIcon
            ? props.leftIcon
            : props.isSelected
            ? require('~/Images/select_check.png')
            : require('~/Images/select.png')
        }
        style={[styles.badge, props.leftIcon && {height: 37, width: 37}]}
      />
      <View style={styles.text_wrap}>
        <Text
          color={props.subText && '#EDAB00'}
          isCenterAlign={props.isPayment}>
          {props.text}
        </Text>
        {props.subText && (
          <Text isCenterAlign={props.isPayment}>{props.subText}</Text>
        )}
      </View>
      {props.rightIcon && props.isSelected && (
        <View style={styles.right_icon}>{props.rightIcon}</View>
      )}
    </TouchableOpacity>
  );
};

const BADGE_SIZE = 22;
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 60,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: -7,
      height: 4,
    },
    shadowOpacity: 0.13,
    shadowRadius: 4.65,
    elevation: 8,
    //
    flexDirection: 'row',
    alignItems: 'center',
  },

  badge: {
    height: BADGE_SIZE,
    width: BADGE_SIZE,
    marginLeft: 12,
  },

  text_wrap: {
    marginLeft: 13,
    width: '80%',
  },

  right_icon: {
    marginHorizontal: -30,
    paddingRight: 45,
  },
});

export default React.memo(SelectButton);
