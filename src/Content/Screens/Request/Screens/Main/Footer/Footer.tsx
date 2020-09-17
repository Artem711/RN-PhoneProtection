// PLUGINS IMPORTS //
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';
import Button from '~/Content/Shared/Components/Buttons/Button/Button';
import SelectButton from '~/Content/Shared/Components/Buttons/SelectButton/SelectButton';

// COMPONENTS IMPORTS /

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const Footer = () => {
  const plans: Array<string> = [
    'Через особистий кабінет на сайті support.ua',
    'Завантажити додаток support.ua',
  ];
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  return (
    <View style={styles.wrapper}>
      <Text>
        Оберіть метод подачі заяви на заміну дисплея з урахуванням компенсації
        на ремонт
      </Text>
      <View style={styles.buttons_wrap}>
        {plans.map((plan) => {
          const isSelected = selectedPlan === plan;
          return (
            <SelectButton
              text={plan}
              isSelected={isSelected}
              onPress={() => setSelectedPlan(plan)}
              style={styles.select_button}
            />
          );
        })}
        <Button text={'Перейти'} style={styles.button} />
        <Text onPress={() => {}}>Відмінити підписку</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},

  buttons_wrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  select_button: {
    width: 280,
    marginTop: 20,
  },

  button: {
    width: 178,
    marginTop: 28,
    marginBottom: 24,
  },
});

export default React.memo(Footer);
