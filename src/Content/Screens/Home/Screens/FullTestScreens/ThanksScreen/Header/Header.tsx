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
      <Text size={24} style={styles.title} isCenterAlign>
        Дякуємо за придбання послуги!
      </Text>
      <Text style={styles.paragraph} lineHeight={21} size={16}>
        Протягом 24 годин фахівець перевірить результат тесту, підтвердить та
        активує повний захист.
      </Text>
      <Text style={styles.paragraph} lineHeight={21} size={16}>
        Перевірити статус послуги і задати питання можна в додатку support.ua
        або в особистому кабінеті на сайті my.support.ua
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
  },

  title: {
    marginTop: 50,
    marginBottom: 30,
  },

  paragraph: {
    marginBottom: 20,
  },
});

export default React.memo(Header);
