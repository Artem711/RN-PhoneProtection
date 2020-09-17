// PLUGINS IMPORTS //
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '~/Content/Shared/Components/Buttons/Button/Button';
import {useNavigation} from '@react-navigation/native';

// COMPONENTS IMPORTS //
import BlockItem from './BlockItem/BlockItem';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const ColorCheckScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View>
        <BlockItem />
        <BlockItem />
        <BlockItem />
        <BlockItem />
        <BlockItem />
        <Button
          text={'ДАЛI'}
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '50%',
    alignSelf: 'center',

    position: 'absolute',
    bottom: 50,
  },
});

export default React.memo(ColorCheckScreen);
