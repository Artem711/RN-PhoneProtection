// PLUGINS IMPORTS //
import React from 'react';
import {StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

// COMPONENTS IMPORTS //
import Main from './Screens/Main/Main';

import {generalHeaderStyle} from '~/Content/Shared/Helpers/Constants/GeneralStyles/GeneralStyles';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const Help = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={Main}
        options={({navigation, route}: any) => ({
          ...generalHeaderStyle,
          headerTitle: 'Часті питання',
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default React.memo(Help);
