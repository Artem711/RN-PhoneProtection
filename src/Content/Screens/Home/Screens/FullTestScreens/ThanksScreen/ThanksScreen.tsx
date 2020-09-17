// PLUGINS IMPORTS //
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// COMPONENTS IMPORTS //
import Header from './Header/Header';
import Body from './Body/Body';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const ThanksScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Header />
      <Body />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {flex: 1},
});

export default React.memo(ThanksScreen);
