// PLUGINS IMPORTS //
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';
import {List} from 'react-native-paper';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const Main = () => {
  return (
    <View>
      <List.Section>
        <List.Accordion
          title="Перше часте запитання"
          theme={{colors: {primary: '#EDAB00'}}}>
          <Text style={styles.text}>
            Розширена відповідь на третє часте питання, яке стосувалося
            перевірки дисплею та оформлення страхівки у компанії супорт юа.
            Користувачу потрібно пройти всі тести, обрати тип послуги та подати
            заявку на підключення даної послуги.
          </Text>
        </List.Accordion>
        <List.Accordion
          title="Перше часте запитання"
          theme={{colors: {primary: '#EDAB00'}}}>
          <Text style={styles.text}>
            Розширена відповідь на третє часте питання, яке стосувалося
            перевірки дисплею та оформлення страхівки у компанії супорт юа.
            Користувачу потрібно пройти всі тести, обрати тип послуги та подати
            заявку на підключення даної послуги.
          </Text>
        </List.Accordion>
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 16,
  },
});

export default React.memo(Main);
