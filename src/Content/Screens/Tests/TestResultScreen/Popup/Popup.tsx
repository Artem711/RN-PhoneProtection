// PLUGINS IMPORTS //
import React from 'react';
import {StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';
import Button from '~/Content/Shared/Components/Buttons/Button/Button';
import Dialog, {DialogContent, ScaleAnimation} from 'react-native-popup-dialog';
import {useNavigation} from '@react-navigation/native';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////
type PropsType = {
  popupVisible: boolean;
  setPopupVisible: (popupVisibility: boolean) => void;
};

const Popup: React.FC<PropsType> = (props) => {
  const navigation = useNavigation();

  return (
    <Dialog
      dialogStyle={styles.wrapper}
      visible={props.popupVisible}
      onTouchOutside={() => props.setPopupVisible(false)}
      dialogAnimation={
        new ScaleAnimation({
          initialValue: 0,
          useNativeDriver: true,
        } as any)
      }>
      <DialogContent>
        <Text color={'#FFC107'} size={20} isCenterAlign>
          Увага!
        </Text>
        <Text size={20} style={styles.paragraph} isCenterAlign>
          Повернувшись назад, прогрес перевірки дисплею обнулиться і вам
          доведеться проходити його з самого початку.
        </Text>

        <Button
          text={'Закінчити тест'}
          backgroundColor={'#E3E2E2'}
          style={styles.button}
          onPress={() => {
            props.setPopupVisible(false);
            navigation.goBack();
          }}
        />
        <Button
          text={'Продовжити тест'}
          onPress={() => props.setPopupVisible(false)}
        />
      </DialogContent>
    </Dialog>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 20,
  },

  paragraph: {
    marginTop: 24,
    marginBottom: 30,
  },

  button: {
    marginBottom: 20,
  },
});

export default React.memo(Popup);
