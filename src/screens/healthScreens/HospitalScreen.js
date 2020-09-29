import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View, Text, Image} from 'react-native';
import axios from 'axios';
import Spinner from '../../components/Spinner';

//components
import HealthCard from '../../components/HealthCard';

export default function HospitalScreen({navigation}) {
  const [hospitals, setHospitals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        'https://joeswantonsing.github.io/CIC_Data/api/health/hospitals.json',
      )
      .then((res) => {
        setHospitals(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.introContainer}>
        <Image
          style={styles.introImage}
          source={require('../../assets/icons/hospital-2.png')}
        />
        <View>
          <Text style={styles.introText}>Listing All Hospitals</Text>
          <Text style={styles.introText}>Churachandpur District</Text>
        </View>
      </View>
      <ScrollView>
        {isLoading ? (
          <View style={styles.spinnerContainer}>
            <Spinner size="large" color="#53599A" spinnerText="Loading" />
          </View>
        ) : null}
        <View style={styles.listContainer}>
          {hospitals.map((hospitalInfo) => (
            <HealthCard key={hospitalInfo.id} cardData={hospitalInfo} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
  },
  introContainer: {
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
