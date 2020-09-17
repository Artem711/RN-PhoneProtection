// PLUGINS IMPORTS //
import React from 'react';
import {View, StyleSheet} from 'react-native';

// COMPONENTS IMPORTS /
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const Main = () => {
  return (
    <View style={styles.wrapper}>
      <Header />
      <Body />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 15,
    marginTop: 32,
  },
});

export default React.memo(Main);
