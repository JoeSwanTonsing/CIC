import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
//Screens for stack
import BankAtmScreen from '../screens/BanksAtmsScreen';
import SBIScreen from '../screens/banksAtmsScreens/SBIScreen';

const BankAtmStack = createStackNavigator();

const BankAtmStackScreen = ({navigation}) => (
  <BankAtmStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#3AB795',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <BankAtmStack.Screen
      name="Home"
      component={BankAtmScreen}
      options={{
        title: ' Banks & ATMs ',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            backgroundColor="#3AB795"
            color="#fff"
            size={30}
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        ),
      }}
    />
    <BankAtmStack.Screen
      name="SBIBanksatm"
      component={SBIScreen}
      options={{
        title: ' SBI Banks & ATMs ',
      }}
    />
  </BankAtmStack.Navigator>
);

export default BankAtmStackScreen;
