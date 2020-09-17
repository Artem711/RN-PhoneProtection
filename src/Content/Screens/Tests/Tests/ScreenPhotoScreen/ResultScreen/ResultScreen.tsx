// PLUGINS IMPORTS //
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';
import Button from '~/Content/Shared/Components/Buttons/Button/Button';
import {useNavigation} from '@react-navigation/native';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////
type PropsType = {
  imageURI: string | null;
  setImageURI: (newImageURI: string | null) => void;

  imageBlob: Blob | null;
  setImageBlob: (newImageBlob: Blob | null) => void;

  setIsSuccess: (isSuccessStatus: boolean) => void;
  isDone: boolean;
};
const ResultScreen: React.FC<PropsType> = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <Image source={{uri: props.imageURI} as any} style={styles.image} />
      <Text size={24} isCenterAlign>
        Перевір, чи смартфон потрапив у камеру і фото вийшло чітким
      </Text>
      <View>
        <Button
          text={'перефотографувати'}
          backgroundColor={'#E3E2E2'}
          onPress={() => {
            props.setImageBlob(null);
            props.setImageURI(null);
          }}
        />
        <Button
          text={'продовжити'}
          style={styles.button}
          onPress={() =>
            props.isDone
              ? navigation.navigate('Home')
              : props.setIsSuccess(true)
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    flex: 1,
  },

  image: {
    height: 300,
    width: '95%',
    marginTop: 20,
  },

  button: {
    marginBottom: 30,
    marginTop: 24,
  },
});

export default React.memo(ResultScreen);
