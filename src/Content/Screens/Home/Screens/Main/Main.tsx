// PLUGINS IMPORTS //
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Text from '~/Content/Shared/Components/Text/Text';
import BlockButton from '~/Content/Shared/Components/Buttons/BlockButton/BlockButton';
import {useNavigation} from '@react-navigation/native';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const Main = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.section}>
        <Text color={'#EDAB00'} style={styles.title} size={22} isCenterAlign>
          Захист дисплею смартфону
        </Text>
        <Text lineHeight={24} style={styles.paragraph}>
          <Text isBold>Швидкий тест</Text>- це комплекс тестів незалежних один
          від одного. Можна пройти один тест або ж всі.
        </Text>
        <Text lineHeight={24} style={styles.paragraph}>
          <Text isBold>Повний захист </Text>- це комплекс тестів залежних один
          від одного. Потрібно пройти всі тести по порядку. Після успішного
          проходження всіх тестів можна вибрати і купити страховку.
        </Text>
      </View>

      <View style={styles.buttons_wrap}>
        <BlockButton
          title={'Швидкий тест'}
          image={require('~/Images/tests/1.png')}
          onPress={() => navigation.navigate('QuickTest')}
        />
        <BlockButton
          title={'Повний захист'}
          image={require('~/Images/tests/2.png')}
          onPress={() => navigation.navigate('FullTestMainScreen')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: 15,
  },

  section: {
    flex: 1,
  },

  title: {
    marginVertical: 30,
  },

  paragraph: {
    marginBottom: 20,
  },

  buttons_wrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default React.memo(Main);
