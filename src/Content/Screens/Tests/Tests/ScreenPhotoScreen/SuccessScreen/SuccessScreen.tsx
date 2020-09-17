// PLUGINS IMPORTS //
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';
import Button from '~/Content/Shared/Components/Buttons/Button/Button';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////
type PropsType = {
  setIsVertical: (isVerticalStatus: boolean) => void;
  setIsSuccess: (isSuccessStatus: boolean) => void;
};
const SuccessScreen: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={require('~/Images/green_check.png')}
        style={styles.image}
      />
      <Text size={24} isCenterAlign>
        Фотографію зроблено! Тепер давай сфотографуємо смартфон горизонтально.
      </Text>
      <Button
        text={'розпочати'}
        onPress={() => {
          props.setIsVertical(false);
          props.setIsSuccess(false);
        }}
      />
    </View>
  );
};

const IMAGE_SIZE = 70;
const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    marginVertical: '40%',
    marginHorizontal: 20,
  },

  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
  },
});

export default React.memo(SuccessScreen);
