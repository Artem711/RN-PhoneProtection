// PLUGINS IMPORTS //
import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';

// COMPONENTS IMPORTS /
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const Main = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.container}>
        <Header />
        <Body />
        <Footer />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 15,
  },

  container: {
    marginVertical: 20,
  },
});

export default React.memo(Main);
