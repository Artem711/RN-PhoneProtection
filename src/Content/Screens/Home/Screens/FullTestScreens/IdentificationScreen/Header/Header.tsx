// PLUGINS IMPORTS //
import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';
import DeviceInfo from 'react-native-device-info';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const Header = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    manufacturer: '',
    maxMemory: 0,
    capacity: 0,
  });

  useEffect(() => {
    const getData = () => {
      DeviceInfo.getDevice().then((device) => {
        DeviceInfo.getManufacturer().then((manufacturer) => {
          DeviceInfo.getMaxMemory().then((maxMemory) => {
            DeviceInfo.getTotalDiskCapacity().then((capacity) => {
              setDeviceInfo({
                ...deviceInfo,
                capacity: Math.round(capacity / 1000000000),
                maxMemory,
                manufacturer,
              });
            });
          });
        });
      });
    };

    getData();
  }, []);

  const model = DeviceInfo.getModel();
  console.log(model);

  console.log(deviceInfo);

  return (
    <>
      <Text size={22} style={styles.title} isCenterAlign>
        Ідентифікація
      </Text>
      <View style={styles.row}>
        <Text color={'#9E9E9E'} lineHeight={24}>
          Марка
        </Text>
        <Text lineHeight={24}>{deviceInfo.manufacturer}</Text>
      </View>
      <View style={styles.row}>
        <Text color={'#9E9E9E'} lineHeight={24}>
          Модель
        </Text>
        <Text lineHeight={24}>{model}</Text>
      </View>
      <View style={styles.row}>
        <Text color={'#9E9E9E'} lineHeight={24}>
          IMEI
        </Text>
        <Text lineHeight={24}>266519765432845</Text>
      </View>

      <View style={styles.bottom_row}>
        <View>
          <Text color={'#9E9E9E'} lineHeight={24} isCenterAlign>
            Оперативна пам’ять
          </Text>
          <Text size={16} lineHeight={24} isCenterAlign>
            {deviceInfo.maxMemory} ГБ
          </Text>
        </View>
        <View>
          <Text color={'#9E9E9E'} lineHeight={24} isCenterAlign>
            Вбудована пам’ять
          </Text>
          <Text size={16} lineHeight={24} isCenterAlign>
            {deviceInfo.capacity} ГБ
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginVertical: 30,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '70%',
  },

  bottom_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default React.memo(Header);
