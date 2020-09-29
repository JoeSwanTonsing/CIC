import React from 'react';
import {View, Text} from 'react-native';

const Card = ({title, content}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.cardBodyContainer}>
        <Text style={styles.cardBodyText}>{content}</Text>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  cardTitle: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardBodyContainer: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#d1d1d1',
  },
  cardBodyText: {
    textAlign: 'justify',
  },
};

export default Card;
