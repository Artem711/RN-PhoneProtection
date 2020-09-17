// PLUGINS IMPORTS //
import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';
import SelectButton from '~/Content/Shared/Components/Buttons/SelectButton/SelectButton';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const Body = () => {
  const data = [
    {
      title: 'Срібний захист',
      text: 'Компенсація до 2000 грн',
      image: require('~/Images/buy/silver.png'),
    },
    {
      title: 'Золотий захист',
      text: 'Компенсація до 4000 грн',
      image: require('~/Images/buy/gold.png'),
    },
    {
      title: 'Платиновий захист',
      text: 'Компенсація до 14000 грн ',
      image: require('~/Images/buy/plate.png'),
    },
  ];

  const paymentData = [
    {
      title: 'Одним платежем',
      text: '600 грн/рік',
    },
    {
      title: 'Підписка',
      text: '60 грн/міс.',
    },
  ];

  const [selectedPayment, setSelectedPayment] = useState(paymentData[0]);
  const [selectedPlan, setSelectedPlan] = useState(data[0]);

  return (
    <>
      <Text size={21} style={styles.title} isCenterAlign>
        Купівля послуги
      </Text>
      {data.map((item) => {
        const isSelected = item.title === selectedPlan.title;

        return (
          <SelectButton
            key={item.title}
            text={item.title}
            subText={item.text}
            onPress={() => setSelectedPlan(item)}
            isSelected={isSelected}
            leftIcon={item.image}
            rightIcon={
              <Image
                source={require('~/Images/check.png')}
                style={styles.check_icon}
              />
            }
            style={styles.plan_button}
          />
        );
      })}

      <Text size={21} style={styles.payment_title} isCenterAlign>
        Оплата
      </Text>
      <View style={styles.payments_wrap}>
        {paymentData.map((item) => {
          const isSelected = item.title === selectedPayment.title;

          return (
            <SelectButton
              key={item.title}
              text={item.title}
              subText={item.text}
              onPress={() => setSelectedPayment(item)}
              isSelected={isSelected}
              style={styles.payment_button}
              isPayment
            />
          );
        })}
      </View>
    </>
  );
};

const BADGE_SIZE = 25;
const styles = StyleSheet.create({
  title: {
    paddingTop: 50,
    paddingBottom: 23,
  },

  check_icon: {
    height: BADGE_SIZE,
    width: BADGE_SIZE,
    resizeMode: 'contain',
  },

  plan_button: {
    marginBottom: 13,
  },

  payment_title: {
    marginTop: 20,
    marginBottom: -10,
  },

  payments_wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  payment_button: {
    width: '45%',
    alignItems: 'center',
    flexDirection: 'column',
    height: 110,
    paddingVertical: '5%',
    marginVertical: 30,
  },
});

export default React.memo(Body);
