// PLUGINS IMPORTS //
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const Body = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.section_wrap}>
        <View style={styles.block}>
          <Text>Компенсація на ремонт до</Text>
        </View>
        <View style={styles.block}>
          <Text>2000 грн</Text>
        </View>
      </View>
      <View style={styles.section_wrap}>
        <View style={styles.block}>
          <Text>Відновлення</Text>
        </View>
        <View style={styles.block}>
          <Text>25.01.2020</Text>
        </View>
      </View>
      <View style={styles.section_wrap}>
        <View style={styles.block}>
          <Text>Тип послуги</Text>
        </View>
        <View style={styles.block}>
          <Text>25.01.2020</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },

  section_wrap: {
    width: '33.33%',
  },

  block: {
    borderWidth: 0.7,
    borderColor: '#d3d3d3',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default React.memo(Body);
