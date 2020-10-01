import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Linking,
} from 'react-native';
import axios from 'axios';
import Spinner from '../components/Spinner';

//components
import Card from '../components/Card';

export default function HomeScreen() {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://joeswantonsing.github.io/CIC_Data/api/about.json')
      .then((res) => {
        setInfo(res.data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getIconProvider() {
    if (info.iconICN === 'flaticon') {
      return (
        <Image
          style={styles.iconProviderLogoStyle}
          source={require('../assets/icons/flaticon.png')}
        />
      );
    }
    return null;
  }

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
        {isLoading ? (
          <View style={styles.spinnerContainer}>
            <Spinner size="large" color="#53599A" spinnerText="Loading" />
          </View>
        ) : null}
        <View style={styles.introCard}>
          <View style={styles.introCardTitle}>
            <Text style={styles.introCardTitleText}>{info.title1}</Text>
          </View>
          <View style={styles.introCardBody}>
            <Text style={styles.introCardBodyText}>{info.title1Message}</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardTitle}>
            <Text style={styles.cardTitleText}>{info.licenseTitle}</Text>
          </View>
          <View style={[styles.cardBody, styles.centerCenter]}>
            <Text style={[styles.cardBodyText, styles.boldText]}>
              {info.licenseMessage1}
            </Text>
            <Text style={styles.cardBodyText}>{info.licenseMessage2}</Text>
            <Text
              style={[styles.cardBodyText, styles.underlineText]}
              onPress={() => {
                Linking.openURL(info.licenseLink);
              }}>
              {info.licenseLink}
            </Text>
            <Text style={styles.cardBodyText}>{info.licenseMessage3}</Text>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.cardTitle}>
            <Text style={styles.cardTitleText}>{info.icontitle}</Text>
          </View>
          <View style={[styles.cardBody, styles.centerCenter]}>
            {getIconProvider()}
            <Text
              style={[styles.cardBodyText, styles.underlineText]}
              onPress={() => {
                Linking.openURL(info.iconLink);
              }}>
              {info.iconLink}
            </Text>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.cardTitle}>
            <Text style={styles.cardTitleText}>{info.contributeTitle}</Text>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardBodyText}>{info.contribLine1}</Text>
            <Text style={styles.cardBodyText}>{info.contribLine2}</Text>
            <Text style={styles.cardBodyText}>
              {info.contribLine3}
              <Text style={styles.devMail}>{info.devMail}</Text>
            </Text>
          </View>
        </View>
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
  cardContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 3,
    marginBottom: 10,
  },
  cardTitle: {
    borderBottomWidth: 1,
    borderBottomColor: '#d1d1d1',
    padding: 15,
  },
  cardTitleText: {
    fontWeight: 'bold',
  },
  cardBody: {
    padding: 15,
  },
  cardBodyText: {
    textAlign: 'justify',
    marginVertical: 5,
  },
  underlineText: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
  boldText: {
    fontWeight: 'bold',
  },
  iconProviderLogoStyle: {
    height: 35,
    resizeMode: 'contain',
  },
  centerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  devMail: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
};
