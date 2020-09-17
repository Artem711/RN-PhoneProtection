// PLUGINS IMPORTS //
import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';
import Button from '~/Content/Shared/Components/Buttons/Button/Button';

// COMPONENTS IMPORTS //
import Popup from './Popup/Popup';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////
type PropsType = {
  navigation: any;
  route: any;
};

const TestResultScreen: React.FC<PropsType> = (props) => {
  const [popupVisible, setPopupVisible] = useState(false as boolean);
  const {isSuccess} = props.route.params;

  return (
    <>
      <View style={styles.wrapper}>
        <View style={{flex: 3.3}}>
          <Image
            style={styles.image}
            source={
              isSuccess
                ? require('~/Images/tests/Success.png')
                : require('~/Images/tests/Fail.png')
            }
          />
          <Text size={28} style={styles.title} isCenterAlign>
            {isSuccess
              ? 'Тест пройдено успішно!'
              : 'На жаль, тест не пройдено!'}
          </Text>
        </View>

        <View style={{flex: 1}}>
          <Button
            text={isSuccess ? 'Повний захист' : 'Повторити'}
            style={styles.button}
          />
          <Button
            text={'Повернутися'}
            backgroundColor={'transparent'}
            textColor={'#EDAB00'}
            onPress={() => setPopupVisible(true)}
          />
        </View>
      </View>

      <Popup popupVisible={popupVisible} setPopupVisible={setPopupVisible} />
    </>
  );
};

const IMAGE_SIZE = 400;
const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flex: 1,
  },

  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
  },

  title: {
    marginHorizontal: 60,
  },

  button: {
    marginBottom: 20,
  },
});

export default React.memo(TestResultScreen);
