// PLUGINS IMPORTS //
import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  style?: any;
  title: string;
  image: any;

  onPress?: () => void;
};
const BlockButton: React.FC<PropsType> = (props) => {
  return (
    <TouchableOpacity
      style={[styles.wrapper, props.style]}
      onPress={props.onPress && props.onPress}>
      <Image style={styles.image} source={props.image} />
      <Text size={19} isCenterAlign>
        {props.title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

const IMAGE_SIZE = 100;
const styles = StyleSheet.create({
  wrapper: {
    width: '40%',
    height: 200,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: -7,
      height: 4,
    },
    shadowOpacity: 0.13,
    shadowRadius: 4.65,
    elevation: 8,
  },

  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    resizeMode: 'contain',
  },
});

export default React.memo(BlockButton);
