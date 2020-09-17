// PLUGINS IMPORTS //
import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

// COMPONENTS IMPORTS //
import Main from './Screens/Main/Main';
//
import QuickTest from './Screens/QuickTestScreen/QuickTestScreen';
//
import FullTestMainScreen from './Screens/FullTestScreens/MainScreen/MainScreen';
import IdentificationScreen from './Screens/FullTestScreens/IdentificationScreen/IdentificationScreen';
import InstructionsScreen from './Screens/FullTestScreens/InstructionsScreen/InstructionsScreen';
import PurchasesScreen from './Screens/FullTestScreens/PurchasesScreen/PurchasesScreen';
import ThanksScreen from './Screens/FullTestScreens/ThanksScreen/ThanksScreen';

import {
  generalHeaderStyle,
  HeaderLeftButton,
} from '~/Content/Shared/Helpers/Constants/GeneralStyles/GeneralStyles';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const Home = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={Main}
        options={({navigation, route}: any) => ({
          ...generalHeaderStyle,
          headerShown: false,
        })}
      />
      {/* QUICK TEST SCREENS */}
      <Stack.Screen
        name="QuickTest"
        component={QuickTest}
        options={({navigation, route}: any) => ({
          ...generalHeaderStyle,
          headerLeft: () => <HeaderLeftButton />,
          headerTitle: 'Швидкий тест',
        })}
      />
      {/* FULL TEST SCREENS */}
      <Stack.Screen
        name="FullTestMainScreen"
        component={FullTestMainScreen}
        options={({navigation, route}: any) => ({
          ...generalHeaderStyle,
          headerLeft: () => <HeaderLeftButton />,
          headerTitle: 'Повний захист',
        })}
      />
      <Stack.Screen
        name="IdentificationScreen"
        component={IdentificationScreen}
        options={({navigation, route}: any) => ({
          ...generalHeaderStyle,
          headerLeft: () => <HeaderLeftButton />,
          headerTitle: 'Ідентифікація',
        })}
      />
      <Stack.Screen
        name="InstructionsScreen"
        component={InstructionsScreen}
        options={({navigation, route}: any) => ({
          ...generalHeaderStyle,
          headerLeft: () => <HeaderLeftButton />,
          headerTitle: 'Инструкцiя',
        })}
      />
      <Stack.Screen
        name="PurchasesScreen"
        component={PurchasesScreen}
        options={({navigation, route}: any) => ({
          ...generalHeaderStyle,
          headerLeft: () => <HeaderLeftButton />,
          headerTitle: 'Купивля послуги',
        })}
      />
      <Stack.Screen
        name="ThanksScreen"
        component={ThanksScreen}
        options={({navigation, route}: any) => ({
          ...generalHeaderStyle,
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default React.memo(Home);
