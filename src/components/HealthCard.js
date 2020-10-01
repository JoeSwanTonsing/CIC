import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HealthCard({cardData}) {
  const {
    name,
    address,
    type,
    timing,
    days,
    gmaps,
    departments,
    closes,
  } = cardData;

  function returnType() {
    if (type.length > 1) {
      return (
        <View style={styles.typeContainer}>
          <Text style={styles.typeText}>Type: {type}</Text>
        </View>
      );
    }
    return null;
  }

  function returnDepartments() {
    if (departments.length === 1) {
      return (
        <View style={styles.departmentsContainer}>
          <Text style={styles.departmentsTitle}>
            Departments Information Unavailable
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.departmentsContainer}>
        <Text style={styles.departmentsTitle}>Departments:</Text>
        <View style={styles.departmentItem}>
          {departments.map((dept, index) => (
            <Text style={styles.depItemText} key={index}>
              {dept}
            </Text>
          ))}
        </View>
      </View>
    );
  }

  function returnDays() {
    if (days.length > 1) {
      return (
        <View style={styles.openingContainer}>
          <Icon name="calendar-outline" size={18} style={styles.openingIcon} />
          <Text style={styles.openingText}>{days}</Text>
        </View>
      );
    }
    return (
      <View style={styles.openingContainer}>
        <Icon name="calendar-outline" size={18} style={styles.openingIcon} />
        <Text style={styles.openingText}>Open days unavailable.</Text>
      </View>
    );
  }

  function returnHours() {
    if (timing.length > 1) {
      return (
        <View style={styles.openingContainer}>
          <Icon name="time-outline" size={18} style={styles.openingIcon} />
          <Text style={styles.openingText}>{timing}</Text>
        </View>
      );
    }
    return (
      <View style={styles.openingContainer}>
        <Icon name="time-outline" size={18} style={styles.openingIcon} />
        <Text style={styles.openingText}>Timings Unavailable</Text>
      </View>
    );
  }

  function returnCloses() {
    if (closes.length > 1) {
      return (
        <View style={styles.openingContainer}>
          <Icon
            name="close-circle-outline"
            size={18}
            style={styles.openingIcon}
          />
          <Text style={styles.openingText}>{closes}</Text>
        </View>
      );
    }
    return null;
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitleText}>{name}</Text>
      </View>

      <View style={styles.cardBodyContainer}>
        <View style={styles.addressContainer}>
          <Icon style={styles.addressIcon} name="map-outline" size={23} />
          <Text style={styles.addressText}>{address}</Text>
        </View>
        {returnType()}
        {returnDepartments()}
        {returnHours()}
        {returnDays()}
        {returnCloses()}
      </View>

      <View style={styles.cardFooterContainer}>
        <View style={styles.footerContents}>
          {/*
            <TouchableOpacity style={styles.buttonStyle}>
              <Icon name="call-sharp" size={23} style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Call</Text>
            </TouchableOpacity>
          */}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              Linking.openURL(gmaps);
            }}>
            <Icon
              name="navigate-circle-sharp"
              size={25}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Google Map</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = {
  cardContainer: {
    marginBottom: 10,
    borderRadius: 3,
    borderColor: '#d1d1d1',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  cardTitleContainer: {
    padding: 15,
    borderBottomColor: '#d1d1d1',
    borderBottomWidth: 1,
  },
  cardTitleText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  cardBodyContainer: {
    padding: 15,
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  addressIcon: {
    color: '#FF3A20',
    marginRight: 5,
  },
  addressText: {
    marginLeft: 5,
    lineHeight: 25,
    flexWrap: 'wrap',
    flex: 1,
  },
  typeContainer: {
    padding: 15,
  },
  typeText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  departmentsContainer: {
    padding: 15,
  },
  departmentsTitle: {
    fontWeight: 'bold',
  },
  departmentItem: {},
  depItemText: {
    //backgroundColor: '#FCDEBE',
    padding: 5,
    margin: 3,
    flexWrap: 'wrap',
    flex: 1,
  },
  openingContainer: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  openingIcon: {
    marginRight: 5,
  },
  openingText: {
    marginLeft: 5,
  },
  cardFooterContainer: {
    borderTopWidth: 1,
    borderTopColor: '#d1d1d1',
    padding: 15,
  },
  footerContents: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: '#53599A',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#53599A',
    marginLeft: 5,
    fontSize: 18,
  },
  buttonIcon: {
    color: '#53599A',
    marginRight: 5,
  },
};
