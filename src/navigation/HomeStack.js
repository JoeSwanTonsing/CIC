import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
//Screens for stack
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
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
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: ' C . I . C ',
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
  </HomeStack.Navigator>
);

export default HomeStackScreen;
