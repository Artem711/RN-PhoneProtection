// PLUGINS IMPORTS //
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';
import {useNavigation} from '@react-navigation/native';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const InstructionsScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.wrapper}>
      <Text size={20}>Що таке повний захист</Text>
      <Text>
        <Text isBold>Повний захист</Text> - це комплекс тестів залежних один від
        одного. Потрібно пройти всі тести по порядку. Після успішного
        проходження всіх тестів можна вибрати і купити страховку.
      </Text>
      <Text size={20}>Перший тест “Замальовка екрану”</Text>
      <Text>
        Тобі потрібно буде пальцем повністю замалювати дисплей смартфону
        протягом 60 сек. Таким чином ми зможемо перевірти наскільки добре працює
        сенсор.
      </Text>
      <Text size={20}>Другий тест “Мультитач”</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    paddingTop: 17,
  },
});

export default React.memo(InstructionsScreen);
