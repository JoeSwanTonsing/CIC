import React from 'react';
import {View, StyleSheet, SafeAreaView, Text, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export function DrawerContent(props) {
  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  style={styles.drawerItemIcon}
                  source={require('../assets/icons/home_nav.png')}
                />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
          </Drawer.Section>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Health Care Facilities"
              icon={() => (
                <Image
                  style={styles.drawerItemIcon}
                  source={require('../assets/icons/heartbeat.png')}
                />
              )}
              onPress={() => {
                props.navigation.navigate('HealthCareFacilities');
              }}
            />
            <DrawerItem
              label="Banks & ATMs"
              icon={() => (
                <Image
                  style={styles.drawerItemIcon}
                  source={require('../assets/icons/bank-online.png')}
                />
              )}
              onPress={() => {
                props.navigation.navigate('BankAtmFacilities');
              }}
            />
          </Drawer.Section>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="About"
              icon={() => (
                <Image
                  style={styles.drawerItemIcon}
                  source={require('../assets/icons/information.png')}
                />
              )}
              onPress={() => {
                props.navigation.navigate('About');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <Icon name="construct-outline" size={20} style={styles.versionIcon} />
        <Text style={styles.versionText}>Ver. 1.0.2</Text>
      </Drawer.Section>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  drawerContent: {
    flex: 1,
  },
  drawerItemIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  bottomDrawerSection: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  versionIcon: {
    color: 'grey',
    marginRight: 10,
  },
  versionText: {
    marginLeft: 10,
    color: 'grey',
  },
});
