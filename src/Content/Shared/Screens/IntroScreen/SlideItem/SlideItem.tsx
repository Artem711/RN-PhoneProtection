// PLUGINS IMPORTS //
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////
type PropsType = {
  item: SlideItemType;
};
const SlideItem: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.wrapper}>
      <Image source={props.item.image} style={styles.image} />
      <View>
        <Text size={24} isBold isCenterAlign>
          {props.item.title}
        </Text>
        <Text style={styles.sub_title} size={16} isCenterAlign>
          {props.item.text}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 40,
    flex: 1,
  },

  image: {
    width: 300,
    maxHeight: 220,
    resizeMode: 'contain',
    flex: 1,
  },

  sub_title: {
    marginTop: 20,
    letterSpacing: 0.5,
  },
});

export default React.memo(SlideItem);
export type SlideItemType = {title: string; text: string; image: any};
