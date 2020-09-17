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
      <Text size={24} isBold isCenterAlign>
        {props.item.title}
      </Text>
      <Text style={styles.sub_title} size={16} isCenterAlign>
        {props.item.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40,
  },

  image: {
    height: 500,
    resizeMode: 'center',
  },

  sub_title: {
    marginTop: 20,
    letterSpacing: 0.5,
  },
});

export default React.memo(SlideItem);
export type SlideItemType = {title: string; text: string; image: any};
