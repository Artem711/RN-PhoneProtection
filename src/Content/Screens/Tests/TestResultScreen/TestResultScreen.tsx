// PLUGINS IMPORTS //
import React, {useState} from 'react';
import {ScrollView, View, Image, StyleSheet} from 'react-native';
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
      <ScrollView style={styles.wrapper}>
        <View style={styles.content}>
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

        <View>
          <Button
            text={isSuccess ? 'Повний захист' : 'Повторити'}
            style={styles.button}
            isCenterAlign
          />
          <Button
            text={'Повернутися'}
            backgroundColor={'transparent'}
            textColor={'#EDAB00'}
            onPress={() => setPopupVisible(true)}
            isCenterAlign
          />
        </View>
      </ScrollView>

      <Popup popupVisible={popupVisible} setPopupVisible={setPopupVisible} />
    </>
  );
};

const IMAGE_SIZE = 375;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
  },

  title: {
    marginHorizontal: 60,
  },

  content: {
    marginBottom: 20,
  },

  button: {
    marginBottom: 20,
  },
});

export default React.memo(TestResultScreen);
