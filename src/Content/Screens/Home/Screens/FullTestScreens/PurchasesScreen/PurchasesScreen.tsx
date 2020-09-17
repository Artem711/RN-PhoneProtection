// PLUGINS IMPORTS //
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// COMPONENTS IMPORTS //
import Body from './Body/Body';
import Footer from './Footer/Footer';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const PurchasesScreen = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <Body />
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default React.memo(PurchasesScreen);
