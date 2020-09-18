// PLUGINS IMPORTS //
import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////
type PropsType = {
  isSelected: boolean;
  onPress: () => void;
};
const BlockItem: React.FC<PropsType> = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.block,
        {
          height: 65,
          width: 62.5,
          backgroundColor: props.isSelected ? '#F6CE0E' : 'white',
        },
        ,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  block: {
    borderWidth: 1,
    borderColor: '#FAE906',
  },
});

export default React.memo(BlockItem);
