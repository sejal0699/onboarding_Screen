import React, { Component } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const DATA = [
  {
    heading: 'HANDPICKED ITEMS FOR YOU',
    type: 'Add to Cart',
    id: '1',
    title: 'Graphene Xtreme',
    price: '$12.00',
    subHeading: [
      'Towel Station',
      'Rain Repellant',
      'Spot-free rinse',
      'Water Saver',
    ]
  },
  {
    id: '2',
    type: 'Add to Cart',
    title: 'Graphene Xtreme',
    price: '$12.00',
    subHeading: [
      'Towel Station',
      'Rain Repellant',
      'Spot-free rinse',
      'Water Saver',
    ]
  },
  {
    type: 'Add to Cart',
    id: '3',
    title: 'Graphene Xtreme',
    price: '$12.00',
    subHeading: [
      'Towel Station',
      'Rain Repellant',
      'Spot-free rinse',
      'Water Saver',
    ]
  },
];

class Cards extends Component {
  renderAnnouncement() {
    return (
      <View style={styles.announcement}>
        <Text style={styles.announcementText}>ANNOUNCEMENT</Text>
        <View style={styles.imageWrapper}>
          <Image source={require('../assets/sq.png')} style={styles.iconImage} />
          <Image source={require('../assets/gallery.png')} style={styles.overlayImage} />
        </View>
      </View>
    );
  }

  renderItem = ({ item }) => {
    const midIndex = Math.ceil(item.subHeading.length / 2);
    const leftItems = item.subHeading.slice(0, midIndex);
    const rightItems = item.subHeading.slice(midIndex);

    return (
      <View style={styles.card}>
        <Image
          source={require('../assets/img.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <View style={styles.subHeadingContainer}>
            <View style={styles.column}>
              {leftItems.map((subItem, index) => (
                <Text key={`left-${index}`} style={styles.subHeading}>{subItem}</Text>
              ))}
            </View>
            <View style={styles.column}>
              {rightItems.map((subItem, index) => (
                <Text key={`right-${index}`} style={styles.subHeading}>{subItem}</Text>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.cardFooter}>
          <Text style={styles.price}>{item.price}</Text>
          <TouchableOpacity style={styles.upgradeButton}>
            <Text style={styles.upgradeText}>{item.type}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View>
        {this.renderAnnouncement()}
        <FlatList
          data={DATA}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  announcement: {
    justifyContent: 'center',
    margin: 15,
  },
  announcementText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: 200,
    marginTop: 15,
  },
  iconImage: {
    width: '100%',
    height: '100%',
  },
  overlayImage: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 50,
    height: 50,
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  card: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    margin: 15,
  },
  image: {
    width: '90%',
    height: 250,
    alignSelf: 'center',
    marginBottom: 10,
  },
  textContainer: {
    marginLeft: 20,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subHeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    marginHorizontal: 5,
  },
  subHeading: {
    fontSize: 12,
    marginBottom: 5,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginLeft: 20,
    marginBottom: 10,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  upgradeButton: {
    backgroundColor: '#486284',
    padding: 8,
    borderRadius: 20,
    marginRight:10
  },
  upgradeText: {
    color: 'white',
    fontWeight:'bold'
  },
});

export default Cards;
