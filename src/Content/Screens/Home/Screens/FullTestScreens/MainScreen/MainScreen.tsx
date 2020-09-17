// PLUGINS IMPORTS //
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';
import Button from '~/Content/Shared/Components/Buttons/Button/Button';
import {useNavigation} from '@react-navigation/native';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const MainScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Text size={20} isCenterAlign>
          Перш ніж продовжити, ознайомся, будь ласка, з умовами договору та
          правилами надання послуг.
        </Text>

        <Text
          size={20}
          isCenterAlign
          style={styles.link}
          onPress={() => navigation.navigate('Contract')}>
          Умови договору
        </Text>
      </View>

      <Text isCenterAlign>Натискаючи “Далі”, ти погоджуєшся з умовами</Text>
      <Button
        text={'ДАЛI'}
        style={styles.button}
        onPress={() => navigation.navigate('IdentificationScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {flex: 1, marginHorizontal: 20, paddingVertical: 20},

  content: {flex: 1, marginTop: '35%'},

  link: {
    marginTop: '20%',
  },

  button: {
    width: 117,
    alignSelf: 'center',
    marginTop: 23,
    marginBottom: 10,
  },
});

export default React.memo(MainScreen);
