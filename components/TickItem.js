
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class TickItem extends Component {
  render() {
    const { items } = this.props;
    return (
      <View style={styles.column}>
        {items.map((item, index) => (
          <View key={index} style={styles.tickRow}>
            <Image source={require('../assets/tick.png')} style={styles.tickIcon} />
            <Text style={styles.tickText}>{item}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
    paddingHorizontal: 5,
    gap: 10,
  },
  tickRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  tickIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  tickText: {
    fontSize: 14,
  },
});

export default TickItem;
