import React from 'react';
import {SafeAreaView, ScrollView, View, Text, Image} from 'react-native';

//components
import ListItemIconText from '../components/ListItemIconText';

export default function HealthScreen({navigation}) {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <View style={styles.introStyle}>
        <Image
          source={require('../assets/icons/heartbeat.png')}
          style={styles.introLogo}
        />
        <Text style={styles.introTitleStyle}>
          Health Care Facilities includes all recognised: Hospitals, Nursing
          Homes, Clinics, Primary Health Centers, Diagnostic Centers
        </Text>
      </View>
      <ScrollView style={styles.scrollViewStyle}>
        <ListItemIconText
          icon="hospital"
          title="Hospitals"
          onPress={() => navigation.navigate('Hospitals')}
        />
        <ListItemIconText
          icon="nursing"
          title="Nursing Homes"
          onPress={() => navigation.navigate('NursingHomes')}
        />
        <ListItemIconText
          icon="clinic"
          title="Clinics"
          onPress={() => navigation.navigate('Clinics')}
        />
        <ListItemIconText
          icon="phc"
          title="Primary Health Centres"
          onPress={() => navigation.navigate('Phcs')}
        />
        <ListItemIconText
          icon="diagnostic"
          title="Diagnostic Centres"
          onPress={() => navigation.navigate('DiagnosticCentre')}
        />
        <ListItemIconText
          icon="pharmacy"
          title="Pharmacies"
          onPress={() => navigation.navigate('Pharmacies')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  containerStyle: {
    flex: 1,
  },
  scrollViewStyle: {
    padding: 10,
  },
  introStyle: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3AB795',
  },
  introLogo: {
    resizeMode: 'contain',
    height: 35,
    width: 35,
    marginRight: 10,
    tintColor: '#fff',
  },
  introTitleStyle: {
    marginTop: 5,
    color: '#fff',
    textAlign: 'justify',
  },
};
