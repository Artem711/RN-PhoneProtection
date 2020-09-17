// PLUGINS IMPORTS //
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

// COMPONENTS IMPORTS //
import TextInput from '~/Content/Shared/Components/TextInput/TextInput';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const Body = () => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder={'Прізвище, Ім’я'}
        icon={
          <Image
            style={styles.image}
            source={require('~/Images/icons/profile.png')}
          />
        }
      />
      <TextInput
        placeholder={'E-mail'}
        icon={
          <Image
            style={styles.image}
            source={require('~/Images/icons/envelope.png')}
          />
        }
      />
      <TextInput
        placeholder={'Телефон'}
        icon={
          <Image
            style={styles.image}
            source={require('~/Images/icons/tel.png')}
          />
        }
      />
    </View>
  );
};

const IMAGE_SIZE = 20;
const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 20,
    marginBottom: 30,
  },

  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    resizeMode: 'contain',
  },
});

export default React.memo(Body);
