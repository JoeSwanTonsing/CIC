import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

//Screens for stack
import HealthScreen from '../screens/HealthScreen';
import HospitalScreen from '../screens/healthScreens/HospitalScreen';

const HealthStack = createStackNavigator();

const HealthStackScreen = ({navigation}) => (
  <HealthStack.Navigator
    initialRouteName="HealthCareFailities"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#3AB795',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HealthStack.Screen
      name="HealthCareFailities"
      component={HealthScreen}
      options={{
        title: 'Health Care Facilities',
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
    <HealthStack.Screen
      name="Hospitals"
      component={HospitalScreen}
      navigation={navigation}
      options={{
        title: 'Hospitals',
      }}
    />
  </HealthStack.Navigator>
);

export default HealthStackScreen;
