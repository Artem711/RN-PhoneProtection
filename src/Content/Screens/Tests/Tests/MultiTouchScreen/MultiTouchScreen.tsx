// PLUGINS IMPORTS //
import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';
import {useNavigation} from '@react-navigation/native';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const MultiTouchScreen = () => {
  const defaultValues = {
    selected1: false,
    selected2: false,
    selected3: false,
  };
  const [state, setState] = useState(defaultValues);
  const navigation = useNavigation();

  useEffect(() => {
    if (state.selected1 && state.selected2 && state.selected3) {
      navigation.navigate('TestResultScreen', {
        title: 'Мультитач',
        isSuccess: true,
      });
      setState(defaultValues);
    }
  }, [state]);

  return (
    <View style={styles.wrapper}>
      <Text size={24} isCenterAlign color={'#AAAAAA'}>
        Торкайся одночасно декількома пальцями до екрану
      </Text>

      <TouchableOpacity
        onPressIn={() => setState((prev) => ({...prev, selected1: true}))}
        onPressOut={() => setState((prev) => ({...prev, selected1: false}))}
        style={[
          styles.circle,
          {alignSelf: 'center'},
          state.selected1 && styles.filled_circle,
        ]}
      />
      <TouchableOpacity
        onPressIn={() => setState((prev) => ({...prev, selected2: true}))}
        onPressOut={() => setState((prev) => ({...prev, selected2: false}))}
        style={[
          styles.circle,
          {marginLeft: '10%'},
          state.selected2 && styles.filled_circle,
        ]}
      />
      <TouchableOpacity
        onPressIn={() => setState((prev) => ({...prev, selected3: true}))}
        onPressOut={() => setState((prev) => ({...prev, selected3: false}))}
        style={[
          styles.circle,
          {marginLeft: '30%'},
          state.selected3 && styles.filled_circle,
        ]}
      />
    </View>
  );
};

const CIRCLE_SIZE = 90;
const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-evenly',
    flex: 1,
  },

  circle: {
    borderWidth: 10,
    borderColor: '#F7CE10',
    borderRadius: CIRCLE_SIZE / 2,
    height: CIRCLE_SIZE,
    width: CIRCLE_SIZE,
  },

  filled_circle: {
    backgroundColor: '#F7CE10',
  },
});

export default React.memo(MultiTouchScreen);
