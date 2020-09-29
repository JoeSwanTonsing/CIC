import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ListItemIconText({title}) {
  return (
    <TouchableOpacity style={styles.listItem}>
      <Text style={styles.listItemTitle}>{title}</Text>
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
  listItemTitle: {
    fontWeight: 'bold',
  },
  listItemIcon: {},
};
