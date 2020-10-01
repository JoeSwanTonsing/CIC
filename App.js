import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaProvider} from 'react-native-safe-area-context';

//Stack Navs for other screens
import {DrawerContent} from './src/navigation/DrawerContent';
import HomeStack from './src/navigation/HomeStack';
import AboutStack from './src/navigation/AboutStack';
import HealthStack from './src/navigation/HealthStack';
import BanksAtmsStack from './src/navigation/BanksAtmsStack';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={HomeStack} />
          <Drawer.Screen name="HealthCareFacilities" component={HealthStack} />
          <Drawer.Screen name="BankAtmFacilities" component={BanksAtmsStack} />
          <Drawer.Screen name="About" component={AboutStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
