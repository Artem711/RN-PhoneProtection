// PLUGINS IMPORTS //
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';
import TextInput from '~/Content/Shared/Components/TextInput/TextInput';
import Button from '~/Content/Shared/Components/Buttons/Button/Button';

import {useNavigation} from '@react-navigation/native';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <Text size={16}>Промо-код</Text>
      <TextInput
        placeholder="Введіть промокод"
        icon={
          <Image
            style={styles.image}
            source={require('~/Images/icons/promo.png')}
          />
        }
      />

      <Button
        text={'ДАЛI'}
        style={styles.button}
        onPress={() => navigation.navigate('ThanksScreen')}
      />
    </View>
  );
};

const IMAGE_SIZE = 26;
const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
  },

  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    resizeMode: 'contain',
  },

  button: {
    marginTop: 20,
    width: 117,
    alignSelf: 'center',
  },
});

export default React.memo(Footer);
