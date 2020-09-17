// PLUGINS IMPORTS //
import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////
type PropsType = {
  value: string;

  state: any;
  setState: (newState: any) => void;
};
const CircleItem: React.FC<PropsType> = (props) => {
  const isSelected = props.state[props.value];

  console.log(isSelected);
  return (
    <TouchableOpacity
      style={[styles.wrapper, isSelected && {backgroundColor: '#32D74B'}]}
      onPressIn={() => {
        setTimeout(() => {
          console.log('clicked');

          props.setState({
            ...props.state,
            [props.value]: true,
          });
        }, 1800);
      }}>
      {isSelected ? (
        <Image
          style={styles.icon}
          source={require('~/Images/check_white.png')}
        />
      ) : (
        <Text isCenterAlign>Натисність сильніше!</Text>
      )}
    </TouchableOpacity>
  );
};

const SIZE = 120;
const ICON_SIZE = 40;
const styles = StyleSheet.create({
  wrapper: {
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: '#FAEC54',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },

  icon: {
    height: ICON_SIZE,
    width: ICON_SIZE,
    resizeMode: 'contain',
  },
});

export default React.memo(CircleItem);
