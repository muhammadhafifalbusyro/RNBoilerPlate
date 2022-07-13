import * as React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Home, Setting} from '../screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../utils';
import {GlobalContext} from '../Store/globalContext';

const Tab = createMaterialBottomTabNavigator();

function MainNavigator() {
  const globalContext = React.useContext(GlobalContext);
  const dark = globalContext.state.isDark;
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.primary}
      barStyle={{
        backgroundColor: dark ? colors.black : colors.white,
        borderTopWidth: dark ? 0.3 : 0,
        borderColor: colors.gray,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MainNavigator;
