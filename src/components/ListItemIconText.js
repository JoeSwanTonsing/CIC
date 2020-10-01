import React from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ListItemIconText({title, onPress, icon}) {
  function returnLogo() {
    if (icon === 'hospital') {
      return (
        <Image
          style={styles.logoLeft}
          source={require('../assets/icons/hospital-2.png')}
        />
      );
    }
    if (icon === 'nursing') {
      return (
        <Image
          style={styles.logoLeft}
          source={require('../assets/icons/home.png')}
        />
      );
    }
    if (icon === 'clinic') {
      return (
        <Image
          style={styles.logoLeft}
          source={require('../assets/icons/clinic.png')}
        />
      );
    }
    if (icon === 'phc') {
      return (
        <Image
          style={styles.logoLeft}
          source={require('../assets/icons/clinic-2.png')}
        />
      );
    }
    if (icon === 'diagnostic') {
      return (
        <Image
          style={styles.logoLeft}
          source={require('../assets/icons/diagnostic.png')}
        />
      );
    }
    if (icon === 'sbi') {
      return (
        <Image
          style={styles.logoLeft}
          source={require('../assets/icons/sbiLogo.png')}
        />
      );
    }
    return null;
  }

  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      <View style={styles.viewRow}>
        {returnLogo()}
        <Text style={styles.listItemTitle}>{title}</Text>
      </View>
      <Icon
        name="chevron-forward-outline"
        size={25}
        style={styles.listItemIcon}
      />
    </TouchableOpacity>
  );
}

const styles = {
  listItem: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 3,
    borderColor: '#d1d1d1',
    borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemTitle: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  listItemIcon: {},
  logoLeft: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
};
