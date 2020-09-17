// PLUGINS IMPORTS //
import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

// COMPONENTS IMPORTS //
import CircleItem from './CircleItem/CircleItem';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const DTouchScreen = () => {
  const navigation = useNavigation();
  const defaultValues = {
    v1: false,
    v2: false,
    v3: false,
    v4: false,
    v5: false,
  };
  const [state, setState] = useState(defaultValues);

  useEffect(() => {
    if (state.v1 && state.v2 && state.v3 && state.v4 && state.v5) {
      navigation.navigate('TestResultScreen', {
        title: '3D Touch',
        isSuccess: true,
      });
      setState(defaultValues);
    }
  }, [state]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <CircleItem value={'v1'} state={state} setState={setState} />
      <CircleItem value={'v2'} state={state} setState={setState} />
      <CircleItem value={'v3'} state={state} setState={setState} />
      <CircleItem value={'v4'} state={state} setState={setState} />
      <CircleItem value={'v5'} state={state} setState={setState} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
});

export default React.memo(DTouchScreen);
