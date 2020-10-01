import React from 'react';
import {SafeAreaView, ScrollView, View, Text, Image} from 'react-native';

//components
import ListItemIconText from '../components/ListItemIconText';

export default function BanksAtmsScreen({navigation}) {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <View style={styles.introStyle}>
        <Image
          source={require('../assets/icons/bank-online.png')}
          style={styles.introLogo}
        />
        <View style={styles.introTitleColumn}>
          <Text style={styles.introTitleStyle}>
            Listing recognised Banks and ATMs in the district
          </Text>
        </View>
      </View>
      <ScrollView style={styles.scrollViewStyle}>
        <ListItemIconText
          icon="sbi"
          title="SBI Branches and ATMs"
          onPress={() => navigation.navigate('SBIBanksatm')}
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
