import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

import Dashboard from '../pages/Dashboard';
import AddBrand from '../pages/Brands/addBrand';
import ListBrand from '../pages/Brands/listBrands';
import AddBait from '../pages/Baits/addBait';
import ListBaits from '../pages/Baits/listBaits';
import Search from '../pages/Search';
import Profile from '../pages/Profile';
import ListCatches from '../pages/Catches/listCatches';
import AddCatches from '../pages/Catches/addCatch';
import DetailsCatch from '../pages/Catches/detailsCatch';
import Settings from '../pages/Settings';

const Tabs = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const CatchesStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeScreenStack = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Dashboard" component={Dashboard} />
  </HomeStack.Navigator>
);

const SearchScreenStack = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search} />
  </SearchStack.Navigator>
);

const SettingsScreenStack = () => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen name="Settings" component={Settings} />
    <SettingsStack.Screen name="ListBrand" component={ListBrand} />
    <SettingsStack.Screen name="AddBrand" component={AddBrand} />
    <SettingsStack.Screen name="ListBaits" component={ListBaits} />
    <SettingsStack.Screen name="AddBait" component={AddBait} />
  </SettingsStack.Navigator>
);

const CatchsScreenStack = () => (
  <CatchesStack.Navigator>
    <CatchesStack.Screen name="ListCatches" component={ListCatches} />
    <CatchesStack.Screen name="AddCatch" component={AddCatches} />
    <CatchesStack.Screen name="DetailsCatch" component={DetailsCatch} />
  </CatchesStack.Navigator>
);

const ProfileScreenStack = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const AppRoutes = () => (
  <Tabs.Navigator>
    <Tabs.Screen
      name="Home"
      component={HomeScreenStack}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: () => <Icon name="home" color="#333" size={30} />,
      }}
    />
    <Tabs.Screen
      name="Search"
      component={SearchScreenStack}
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: () => <Icon name="search" color="#333" size={30} />,
      }}
    />
    <Tabs.Screen
      name="Catches"
      component={CatchsScreenStack}
      options={{
        tabBarLabel: 'Catches',
        tabBarIcon: () => <Icon2 name="fish" color="#333" size={30} />,
      }}
    />
    <Tabs.Screen
      name="Settings"
      component={SettingsScreenStack}
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: () => <Icon name="settings" color="#333" size={30} />,
      }}
    />
    <Tabs.Screen
      name="Profile"
      component={ProfileScreenStack}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: () => <Icon2 name="user-circle" color="#333" size={30} />,
      }}
    />
  </Tabs.Navigator>
);

export default AppRoutes;
