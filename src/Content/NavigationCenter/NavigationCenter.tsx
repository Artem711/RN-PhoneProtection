// PLUGINS IMPORTS //
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// COMPONENTS IMPORTS //
import Home from '~/Content/Screens/Home/Home';
import Help from '~/Content/Screens/Help/Help';
import Contract from '~/Content/Screens/Contract/Contract';
import Request from '~/Content/Screens/Request/Request';

// EXTRA IMPORTS //

////////////////////////////////////////////////////////////////////////////////////

type PropsType = {};

const NavigationCenter: React.FC<PropsType> = (props) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Finances"
      tabBarOptions={{
        activeBackgroundColor: '#FFC107',
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        labelStyle: {
          marginBottom: 2,
          marginTop: -2,
        },
        iconStyle: {
          marginTop: 3,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}: any) => (
            <Image
              style={styles.icon}
              source={
                focused
                  ? require('~/Images/icons/home_check.png')
                  : require('~/Images/icons/home.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Help"
        component={Help}
        options={{
          tabBarIcon: ({focused}: any) => (
            <Image
              style={styles.icon}
              source={
                focused
                  ? require('~/Images/icons/help_check.png')
                  : require('~/Images/icons/help.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contract"
        component={Contract}
        options={{
          tabBarIcon: ({focused}: any) => (
            <Image
              style={styles.icon}
              source={
                focused
                  ? require('~/Images/icons/contract_check.png')
                  : require('~/Images/icons/contract.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Request"
        component={Request}
        options={{
          tabBarIcon: ({focused}: any) => (
            <Image
              style={styles.icon}
              source={
                focused
                  ? require('~/Images/icons/request_check.png')
                  : require('~/Images/icons/request.png')
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const ICON_SIZE = 21;
const styles = StyleSheet.create({
  tab_bar: {
    backgroundColor: '#E5E5E5',
    elevation: 25,
  },

  icon: {
    height: ICON_SIZE,
    width: ICON_SIZE,
    resizeMode: 'contain',
  },
});

export default NavigationCenter;
