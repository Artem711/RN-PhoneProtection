// PLUGINS IMPORTS //
import React, {useState} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Button from '~/Content/Shared/Components/Buttons/Button/Button';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import AsyncStorage from '@react-native-community/async-storage';

// COMPONENTS IMPORTS //
import SlideItem, {SlideItemType} from './SlideItem/SlideItem';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////
const {width} = Dimensions.get('screen');

type PropsType = {
  route: any;
};
const IntroScreen: React.FC<PropsType> = (props) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0 as number);
  const data: Array<SlideItemType> = [
    {
      title: 'Халепи трапляються',
      text: 'Смартфони літають і розбиваються.',
      image: require('~/Images/StarterImages/img1.png'),
    },
    {
      title: 'Купуючи послугу — економте заздалегідь',
      text:
        'Коли розбивається пристрій, ремонт коштує в три рази дорожче послуги.',
      image: require('~/Images/StarterImages/img2.png'),
    },
    {
      title: 'Просто і без бюрократії',
      text:
        'Доставка пристрою новою поштою, оформлення замовлення на обслуговування — у додатку.',
      image: require('~/Images/StarterImages/img3.png'),
    },
    {
      title: 'Захисти свій смартфон!',
      text: 'Пройди тест екрану і обери послугу, яка підходить тобі!',
      image: require('~/Images/StarterImages/img4.png'),
    },
  ];

  const closeIntroFunction = async () => {
    const {getData} = await props.route.params;
    await AsyncStorage.setItem('appUsed', 'used');
    await getData();
  };

  const DOT_SIZE = 14;
  return (
    <View style={styles.wrapper}>
      <View style={styles.carousel}>
        <Carousel
          data={data}
          renderItem={({item, index}: {item: SlideItemType; index: number}) => (
            <SlideItem item={item} />
          )}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={(index) => setCurrentSlideIndex(index)}
        />

        <Pagination
          dotsLength={data.length}
          activeDotIndex={currentSlideIndex}
          dotStyle={{
            width: DOT_SIZE,
            height: DOT_SIZE,
            borderRadius: DOT_SIZE / 2,
            marginHorizontal: 4,
            backgroundColor: '#F7CE10',
          }}
          inactiveDotStyle={{
            borderWidth: 2,
            borderColor: '#FAEC54',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>

      <View style={styles.buttons_wrap}>
        <Button
          onPress={closeIntroFunction}
          text={'Пропустити'}
          backgroundColor={'transparent'}
          textColor={'#EDAB00'}
          style={styles.button}
          removeUppercase
        />
        <Button
          onPress={closeIntroFunction}
          text={'ДАЛI'}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  carousel: {flex: 1},

  buttons_wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.2,
  },

  button: {
    marginHorizontal: 20,
  },
});

export default React.memo(IntroScreen);
