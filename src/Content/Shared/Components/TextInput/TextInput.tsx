// PLUGINS IMPORTS //
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  style?: any;

  icon?: any;
  placeholder?: string;
  value?: string;
  onChangeText?: (newText: string) => void;
};
const TextInputComponent: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.icon}>{props.icon && props.icon}</View>

      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText && props.onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'silver',
    height: 55,
    fontSize: 18,
  },

  icon: {
    marginRight: 14,
  },
});

export default React.memo(TextInputComponent);
