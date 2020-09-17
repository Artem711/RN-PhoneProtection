// PLUGINS IMPORTS //
import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';
import BlockButton from '~/Content/Shared/Components/Buttons/BlockButton/BlockButton';
import {useNavigation} from '@react-navigation/native';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const QuickTestScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text size={24} style={styles.title} isCenterAlign>
        Швидкий тест
      </Text>
      <View style={styles.buttons_wrap}>
        <BlockButton
          title={'Замальовка екрану'}
          image={require('~/Images/tests/3.png')}
          style={styles.button}
          onPress={() =>
            navigation.navigate('MainTestsScreen', {
              test: 'ScreenCheck',
            })
          }
        />
        <BlockButton
          title={'Мультитач'}
          image={require('~/Images/tests/4.png')}
          style={styles.button}
          onPress={() =>
            navigation.navigate('MainTestsScreen', {
              test: 'MultiTouch',
            })
          }
        />
        <BlockButton
          title={'Зміна кольору'}
          image={require('~/Images/tests/5.png')}
          style={styles.button}
          onPress={() =>
            navigation.navigate('MainTestsScreen', {
              test: 'ColorCheck',
            })
          }
        />
        <BlockButton
          title={'3D тач'}
          image={require('~/Images/tests/6.png')}
          style={styles.button}
          onPress={() =>
            navigation.navigate('MainTestsScreen', {
              test: '3DTouch',
            })
          }
        />

        <BlockButton
          title={'Фото екрану'}
          image={require('~/Images/tests/photo_screen1.png')}
          style={styles.button}
          onPress={() =>
            navigation.navigate('MainTestsScreen', {
              test: 'ScreenPhoto',
            })
          }
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 30,
  },

  title: {
    marginBottom: 15,
  },

  buttons_wrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },

  button: {
    width: '45%',
    height: 200,
    marginVertical: 20,
  },
});

export default React.memo(QuickTestScreen);
