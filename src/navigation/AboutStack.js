import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
//Screens for stack
import AboutScreen from '../screens/AboutScreen';

const AboutStack = createStackNavigator();

const AboutStackScreen = ({navigation}) => (
  <AboutStack.Navigator
    initialRouteName="About"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#3AB795',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <AboutStack.Screen
      name="About"
      component={AboutScreen}
      options={{
        title: 'About',
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
  </AboutStack.Navigator>
);

export default AboutStackScreen;
