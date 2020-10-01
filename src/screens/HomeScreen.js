import React from 'react';
import {SafeAreaView, ScrollView, View, Text, Image} from 'react-native';

//components
import Card from '../components/Card';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <View style={styles.introStyle}>
        <Image
          source={require('../assets/icons/smartphone.png')}
          style={styles.introLogo}
        />
        <View style={styles.introTitleColumn}>
          <Text style={styles.introTitleStyle}>Churachandpur</Text>
          <Text style={styles.introTitleStyle}>Information</Text>
          <Text style={styles.introTitleStyle}>Center</Text>
        </View>
      </View>
      <ScrollView style={styles.scrollViewStyle}>
        <View style={styles.introCard}>
          <View style={styles.introCardTitle}>
            <Text style={styles.introCardTitleText}>👋🏻 Chibai</Text>
          </View>
          <View style={styles.introCardBody}>
            <Text style={styles.introCardBodyText}>
              Churachandpur Information Center App is developed for the people
              of Churachandpur District, Manipur to keep up-to-date with
              information and locations of office buildings within the district.
            </Text>
          </View>
        </View>
        <Card
          title="Disclaimer"
          content="Contents, Information and other details contained within this app are taken from local and online sources where the information is freely made available to the general public. If for any reason, any private information is displayed, please contact developer."
        />
        <Card
          title="Contribute?"
          content="All contributions - big and small are always welcomed. If contributing is something you'd like to do, please see the About section to help you get started."
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3AB795',
  },
  introLogo: {
    resizeMode: 'contain',
    height: 75,
    width: 75,
    marginRight: 10,
  },
  introTitleColumn: {
    marginLeft: 10,
  },
  introTitleStyle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  introCard: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
  },
  introCardTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  introCardTitleText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  introCardBody: {
    marginTop: 15,
  },
  introCardBodyText: {
    textAlign: 'justify',
  },
};
