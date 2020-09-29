import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

//Screens for stack
import HealthScreen from '../screens/HealthScreen';
import HospitalScreen from '../screens/healthScreens/HospitalScreen';
import NursingHomeScreen from '../screens/healthScreens/NursingHomeScreen';
import ClinicScreen from '../screens/healthScreens/ClinicScreen';
import PHCScreen from '../screens/healthScreens/PHCScreen';
import DiagnosticScreen from '../screens/healthScreens/DiagnosticScreen';

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
    <HealthStack.Screen
      name="NursingHomes"
      component={NursingHomeScreen}
      navigation={navigation}
      options={{
        title: 'Nursing Homes',
      }}
    />
    <HealthStack.Screen
      name="Clinics"
      component={ClinicScreen}
      navigation={navigation}
      options={{
        title: 'Clinics',
      }}
    />
    <HealthStack.Screen
      name="Phcs"
      component={PHCScreen}
      navigation={navigation}
      options={{
        title: 'Primary Health Centres',
      }}
    />
    <HealthStack.Screen
      name="DiagnosticCentre"
      component={DiagnosticScreen}
      navigation={navigation}
      options={{
        title: 'Diagnostic Centres',
      }}
    />
  </HealthStack.Navigator>
);

export default HealthStackScreen;
