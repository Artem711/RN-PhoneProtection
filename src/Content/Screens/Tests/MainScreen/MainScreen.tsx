// PLUGINS IMPORTS //
import React, {useEffect, useState} from 'react';
import {View, ScrollView, Image, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';
import Button from '~/Content/Shared/Components/Buttons/Button/Button';

// COMPONENTS IMPORTS //
import Body from './Body/Body';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////
type PropsType = {
  navigation: any;
  route: any;
};
const MainScreen: React.FC<PropsType> = (props) => {
  const [isCarousel, setIsCarousel] = useState(false as boolean);
  const {test} = props.route.params;

  const renderData = () => {
    if (test === 'MultiTouch') {
      return {
        image: require('~/Images/tests/multitouch.png'),
        text:
          'Перевір, скільки пальців прилад може виявити, коли ти торкаєшся дисплею декількома пальцями одночасно. Це допоможе нам зрозуміти чи екран правильно реагує на положення пальців.',
        navigationDest: 'MultiTouchScreen',
      };
    } else if (test === 'ScreenCheck') {
      return {
        image: require('~/Images/tests/screen.png'),
        text:
          'Пальцем повністю замалюй дисплей смартфону протягом 60 сек. Таким чином ми перевіремо наскільки добре працює сенсор.',
        navigationDest: 'ScreenCheckScreen',
      };
    } else if (test === 'ColorCheck') {
      return {
        image: require('~/Images/tests/colors.png'),
        text:
          'На екрані суцільною заливкою з’явиться один з 5 кольорів. Для зміни кольору тобі необхідно буде доторкнутися до екрану. Це допоможе нам перевірити цілісність пікселів.',
        navigationDest: 'ColorCheckScreen',
      };
    } else if (test === '3DTouch') {
      return {
        image: require('~/Images/tests/3D.png'),
        text:
          'Щільно притискай пальцем на кружечки, що з’являються на екрані, доки вони не стануть зеленими. Це допоможе нам перевірити наскільки точно працює функція 3D Touch.',
        navigationDest: '3DTouchScreen',
      };
    } else if (test === 'ScreenPhoto') {
      return {
        data: [
          {
            image: require('~/Images/tests/photo_screen1.png'),
            text:
              'Підготуй дзверкало, щоб можна було сфотографувати у ньому телефон. Тест буде проходити у 2 етапи: горизонтальне положення та вертикальне положення телефону.',
          },
          {
            image: require('~/Images/tests/photo_screen2.png'),
            text:
              'Під час тесту на екрані смартфону з’явиться зелена рамка. Відображаючи телефон у дзеркалі, розмісти його таким чином, щоб він потрапив у цю зелену рамку. Програма зробить фото автоматично.',
          },
          {
            image: require('~/Images/tests/photo_screen3.png'),
            text:
              'Після першого фото, натисни на екрані далі, щоб повторити таку ж саму дію для фотографування смартфону у горизонтальному положенні.',
          },
        ],
        navigationDest: 'ScreenPhotoScreen',
      };
    }
  };

  useEffect(() => {
    // props.navigation.addEventListener('focus', () => {
    const {test} = props.route.params;

    if (test === 'MultiTouch') {
      props.navigation.setOptions({
        headerTitle: 'Мультитач',
      });
    } else if (test === 'ScreenCheck') {
      props.navigation.setOptions({
        headerTitle: 'Замальовка екрану',
      });
    } else if (test === 'ColorCheck') {
      props.navigation.setOptions({
        headerTitle: 'Зміна кольору',
      });
    } else if (test === '3DTouch') {
      props.navigation.setOptions({
        headerTitle: '3D Touch',
      });
    } else if (test === 'ScreenPhoto') {
      setIsCarousel(true);
      props.navigation.setOptions({
        headerTitle: 'Фото екрану',
      });
    }
    // });
  }, [props.navigation]);

  const data = renderData();
  return (
    <View style={styles.wrapper}>
      <Body data={data} isCarousel={isCarousel} />
      <Button
        text={'Разпочати'}
        style={styles.button}
        onPress={() =>
          props.navigation.navigate(data?.navigationDest as string)
        }
        isCenterAlign
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },

  image: {
    resizeMode: 'contain',
    height: 340,
    width: '100%',
    marginTop: 20,
    marginBottom: '10%',
  },

  button: {
    width: 198,
    marginTop: 20,
    position: 'absolute',
    bottom: 80,
  },
});

export default React.memo(MainScreen);
