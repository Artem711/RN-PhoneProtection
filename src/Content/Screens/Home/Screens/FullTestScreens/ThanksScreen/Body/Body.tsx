// PLUGINS IMPORTS //
import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';
import Button from '~/Content/Shared/Components/Buttons/Button/Button';
import {useNavigation} from '@react-navigation/native';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const Body = () => {
  const navigation = useNavigation();

  const socials = [
    require('~/Images/socials/facebook.png'),
    require('~/Images/socials/instargam.png'),
    require('~/Images/socials/viber.png'),
    require('~/Images/socials/telegram.png'),
  ];

  return (
    <View>
      <Button text={'Відкрити додаток'} style={styles.button} />
      <Button text={'перейти в кабінет'} style={styles.button} />
      <Text style={styles.social_title} isCenterAlign>
        Слідкуйте за новинами:
      </Text>
      <View style={styles.socials_wrap}>
        {socials.map((img) => (
          <TouchableOpacity>
            <Image source={img} style={styles.icon} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const ICON_SIZE = 40;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  button: {
    width: 244,
    alignSelf: 'center',
    marginBottom: 24,
  },

  social_title: {
    marginTop: 12,
    marginBottom: 16,
  },

  socials_wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 30,
    marginBottom: 10,
  },

  icon: {
    height: ICON_SIZE,
    width: ICON_SIZE,
  },
});

export default React.memo(Body);
