import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View, Text, Image} from 'react-native';
import axios from 'axios';
import Spinner from '../../components/Spinner';

//components
import HospitalCard from '../../components/HospitalCard';

export default function DiagnosticScreen({navigation}) {
  const [dCenter, setDcenter] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        'https://joeswantonsing.github.io/CIC_Data/api/diagnosticcenter.json',
      )
      .then((res) => {
        setDcenter(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView style={styles.savStyle}>
      <View style={styles.introSection}>
        <Image
          style={styles.introImage}
          source={require('../../assets/icons/diagnostic.png')}
        />
        <View>
          <Text style={styles.introText}>Listing All Diagnostic Centers</Text>
          <Text style={styles.introText}>Churachandpur District</Text>
        </View>
      </View>
      <ScrollView style={styles.container}>
        {isLoading ? (
          <View style={styles.spinnerContainer}>
            <Spinner size="large" color="#53599A" spinnerText="Loading" />
          </View>
        ) : null}
        <View style={styles.listContainer}>
          {dCenter.map((diag) => (
            <HospitalCard key={diag.id} cardData={diag} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  savStyle: {
    flex: 1,
  },
  introSection: {
    padding: 15,
    justifyContent: 'center',
    borderBottomColor: '#d1d1d1',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  introImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 5,
    tintColor: '#53599A',
  },
  introText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#53599A',
  },
  spinnerContainer: {
    marginTop: 20,
  },
  listContainer: {
    padding: 8,
  },
};
