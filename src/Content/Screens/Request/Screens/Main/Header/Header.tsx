// PLUGINS IMPORTS //
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <Text size={16} isCenterAlign>
        Заява на отримання компенсації у разі настання страхового випадку
      </Text>
      <Text style={styles.code} color={'#EDAB00'} size={18} isCenterAlign>
        №8888999901
      </Text>
      <Text isCenterAlign>Samsung Galaxy S9 + 64 GB</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  code: {
    marginTop: 8,
    marginBottom: 20,
  },
});

export default React.memo(Header);
