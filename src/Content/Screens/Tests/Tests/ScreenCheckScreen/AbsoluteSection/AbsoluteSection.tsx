// PLUGINS IMPORTS //
import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';
// @ts-ignore
import Pie from 'react-native-pie';
import {useNavigation} from '@react-navigation/native';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  blocksCount: number;

  selectedIndexes: Array<number>;
  setSelectedIndexes: (newSelectedIndexes: Array<number>) => void;
};
const AbsoluteSection: React.FC<PropsType> = (props) => {
  const [counter, setCounter] = useState(60);
  const navigation = useNavigation();

  const percent = Math.round(
    (props.selectedIndexes.length / props.blocksCount) * 100,
  );

  counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);

  const navigate = (isFail?: boolean) => {
    navigation.navigate('TestResultScreen', {
      title: 'Мультитач',
      isSuccess: isFail,
    });
    props.setSelectedIndexes([]);
    setCounter(60);
  };

  useEffect(() => {
    counter <= 0 && navigate(true);
  }, [counter]);

  useEffect(() => {
    if (props.selectedIndexes.length >= props.blocksCount) {
      navigate();
    }
  }, [props.selectedIndexes]);

  return (
    <View style={styles.absolute_wrap} pointerEvents={'none'}>
      <Text size={24} color={'#AAAAAA'} isCenterAlign>
        {props.selectedIndexes.length <= 0 &&
          'Починай замальовувати пальцем екран'}
      </Text>

      <View style={styles.pie_wrap}>
        <Pie
          radius={80}
          innerRadius={75}
          sections={[
            {
              percentage: percent,
              color: '#FFC107',
            },
          ]}
          backgroundColor="#ddd"
        />
        <View style={styles.gauge}>
          <Text style={styles.gaugeText} size={28}>
            {percent}%
          </Text>
        </View>
      </View>
      <Text size={28}>{counter} сек</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default React.memo(AbsoluteSection);
