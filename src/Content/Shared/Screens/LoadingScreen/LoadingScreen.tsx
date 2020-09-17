// PLUGINS IMPORTS //
import React from 'react';
import {Image, Dimensions, StyleSheet} from 'react-native';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////
const {height, width} = Dimensions.get('screen');
type PropsType = {};
const LoadingScreen: React.FC<PropsType> = (props) => {
  return (
    <Image
      source={require('~/Images/StarterImages/start.png')}
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height,
    width,
  },
});

export default React.memo(LoadingScreen);
