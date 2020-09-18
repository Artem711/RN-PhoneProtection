// PLUGINS IMPORTS //
import React, {useState} from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';
import Carousel, {Pagination} from 'react-native-snap-carousel';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const DOT_SIZE = 14;
const {width} = Dimensions.get('screen');
const SlideItem: React.FC<any> = (props) => {
  return (
    <>
      <Image source={props.data?.image} style={styles.image} />

      {props.isCarousel && (
        <Pagination
          dotsLength={props.fullData.length}
          activeDotIndex={props.currentSlide}
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
          containerStyle={styles.pagination}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      )}

      <Text style={styles.text} isCenterAlign>
        {props.data?.text}
      </Text>
    </>
  );
};

type PropsType = {
  data: any;
  isCarousel: boolean;
};

const Body: React.FC<PropsType> = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (props.isCarousel) {
    return (
      <Carousel
        data={props.data.data}
        renderItem={({item}: any) => (
          <SlideItem
            data={item}
            isCarousel={props.isCarousel}
            fullData={props.data.data}
            currentSlide={currentSlide}
          />
        )}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={(index) => setCurrentSlide(index)}
      />
    );
  } else {
    return <SlideItem {...props} />;
  }
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    height: 300,
    width: '100%',
    marginTop: 20,
    marginBottom: '10%',
  },

  text: {
    marginRight: 30,
  },

  pagination: {
    marginTop: -50,
  },
});

export default React.memo(Body);
