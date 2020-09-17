// PLUGINS IMPORTS //
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Text from '~/Content/Shared/Components/Text/Text';
import Button from '~/Content/Shared/Components/Buttons/Button/Button';
import {useNavigation} from '@react-navigation/native';

// COMPONENTS IMPORTS //
import Header from './Header/Header';
import Body from './Body/Body';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const IdentificationScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <Header />
        <Body />
        <Button
          style={styles.button}
          text={'розпочати'}
          onPress={() => navigation.navigate('PurchasesScreen')}
        />

        <Text
          size={16}
          onPress={() => navigation.navigate('InstructionsScreen')}
          isCenterAlign>
          Інструкція
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {flex: 1},

  container: {
    marginHorizontal: 20,
    flex: 1,
  },

  button: {
    marginTop: 5,
    marginBottom: 20,
  },
});

export default React.memo(IdentificationScreen);
