// PLUGINS IMPORTS //
import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// COMPONENTS IMPORTS //
import BlocksSection from './BlocksSection/BlocksSection';
import AbsoluteSection from './AbsoluteSection/AbsoluteSection';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const {height} = Dimensions.get('screen');

const blocksCount = Math.round(height / 11.56);
const ScreenCheckScreen = () => {
  const [selectedIndexes, setSelectedIndexes] = useState([] as Array<number>);

  return (
    <SafeAreaView style={styles.wrapper}>
      <BlocksSection
        blocksCount={blocksCount}
        selectedIndexes={selectedIndexes}
        setSelectedIndexes={setSelectedIndexes}
      />

      <AbsoluteSection
        blocksCount={blocksCount}
        selectedIndexes={selectedIndexes}
        setSelectedIndexes={setSelectedIndexes}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  absolute_wrap: {
    position: 'absolute',
    zIndex: 999,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    flex: 1,
    height: '100%',
    paddingVertical: '50%',
  },

  pie_wrap: {
    width: 175,
    alignItems: 'center',
  },

  gauge: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
});

export default React.memo(ScreenCheckScreen);
