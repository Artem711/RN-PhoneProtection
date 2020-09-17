// PLUGINS IMPORTS //
import React, {useState, useEffect} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import * as Font from 'expo-font';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

// COMPONENTS IMPORTS //
import NavigationCenter from '~/Content/NavigationCenter/NavigationCenter';

import IntroScreen from '~/Content/Shared/Screens/IntroScreen/IntroScreen';
import LoadingScreen from '~/Content/Shared/Screens/LoadingScreen/LoadingScreen';

// Tests screens
import MainTestsScreen from '~/Content/Screens/Tests/MainScreen/MainScreen';
import TestResultScreen from '~/Content/Screens/Tests/TestResultScreen/TestResultScreen';
//
import MultiTouchScreen from '~/Content/Screens/Tests/Tests/MultiTouchScreen/MultiTouchScreen';
import ColorCheckScreen from '~/Content/Screens/Tests/Tests/ColorCheckScreen/ColorCheckScreen';
import ScreenCheckScreen from '~/Content/Screens/Tests/Tests/ScreenCheckScreen/ScreenCheckScreen';
import DTouchScreen from '~/Content/Screens/Tests/Tests/3DTouchScreen/3DTouchScreen';
import ScreenPhotoScreen from '~/Content/Screens/Tests/Tests/ScreenPhotoScreen/ScreenPhotoScreen';

import {
  generalHeaderStyle,
  HeaderLeftButton,
} from '~/Content/Shared/Helpers/Constants/GeneralStyles/GeneralStyles';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const App = () => {
  const [loading, setLoading] = useState(true as boolean);
  const [appLaunched, setAppLaunched] = useState(false as boolean);
  const Stack = createStackNavigator();

  const getData = async () => {
    await Font.loadAsync({
      Light: require('./assets/Fonts/Montserrat-Regular.ttf'),
      Bold: require('./assets/Fonts/Montserrat-Medium.ttf'),
    });

    if (await AsyncStorage.getItem('appUsed')) {
      setAppLaunched(true);
    } else {
      setAppLaunched(false);
    }

    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="NavigationCenter">
          {loading ? (
            <Stack.Screen
              name="LoadingScreen"
              component={LoadingScreen}
              options={({navigation, route}: any) => ({headerShown: false})}
            />
          ) : appLaunched ? (
            <>
              <Stack.Screen
                name="NavigationCenter"
                component={NavigationCenter}
                options={({navigation, route}: any) => ({
                  headerShown: false,
                })}
              />
              {/* TESTS */}
              <Stack.Screen
                name="MainTestsScreen"
                component={MainTestsScreen}
                options={({navigation, route}: any) => ({
                  ...generalHeaderStyle,
                  headerLeft: () => <HeaderLeftButton />,
                })}
                initialParams={{
                  test: 'MultiTouch',
                }}
                listeners={({navigation, route}: any) => ({
                  focus: () => {
                    navigation.setParams({
                      test: route.params.test,
                    });
                  },
                })}
              />
              <Stack.Screen
                name="TestResultScreen"
                component={TestResultScreen}
                options={({navigation, route}: any) => ({
                  ...generalHeaderStyle,
                  headerTitle: route.params.title,
                  headerLeft: () => <HeaderLeftButton />,
                })}
                initialParams={{
                  title: '',
                  isSuccess: false as boolean,
                }}
              />
              <Stack.Screen
                name="MultiTouchScreen"
                component={MultiTouchScreen}
                options={({navigation, route}: any) => ({headerShown: false})}
              />
              <Stack.Screen
                name="ColorCheckScreen"
                component={ColorCheckScreen}
                options={({navigation, route}: any) => ({headerShown: false})}
              />
              <Stack.Screen
                name="ScreenCheckScreen"
                component={ScreenCheckScreen}
                options={({navigation, route}: any) => ({headerShown: false})}
              />
              <Stack.Screen
                name="3DTouchScreen"
                component={DTouchScreen}
                options={({navigation, route}: any) => ({headerShown: false})}
              />
              <Stack.Screen
                name="ScreenPhotoScreen"
                component={ScreenPhotoScreen}
                options={({navigation, route}: any) => ({headerShown: false})}
              />
            </>
          ) : (
            <Stack.Screen
              name="IntroScreen"
              component={IntroScreen}
              options={({navigation, route}: any) => ({headerShown: false})}
              initialParams={{
                getData,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar barStyle="dark-content" backgroundColor={'#F7CE10'} />
    </>
  );
};

const styles = StyleSheet.create({});

export default React.memo(App);
