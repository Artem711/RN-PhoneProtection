import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
//

export const generalHeaderStyle = {
  headerStyle: {
    backgroundColor: '#F6CE0E',
  },
};

export const HeaderLeftButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.left_icon}
      onPress={() => navigation.goBack()}
      hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
      <Image source={require('~/Images/arrow.png')} style={styles.icon} />
    </TouchableOpacity>
  );
};

const ICON_SIZE = 17;
const styles = StyleSheet.create({
  left_icon: {
    marginHorizontal: 15,
  },

  icon: {
    height: ICON_SIZE,
    width: ICON_SIZE,
    resizeMode: 'contain',
  },
});
