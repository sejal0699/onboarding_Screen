import React, { Component } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const DATA = [
  {
    heading: 'TOP SELLERS',
    type: 'Add to Cart',
    id: '1',
    title: 'Graphene Xtreme',
    price: '$12.00',
    subHeading: [
      'Towel Station',
      'Rain Repellant',
      'Spot-free rinse'
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
      'Spot-free rinse'
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
      'Spot-free rinse'
    ]
  },
];

class TopSellers extends Component {
  render() {
    const renderItem = ({ item }) => (
        <View>
                 <Text style={styles.sectionTitle}>{item.heading}</Text>
      <View style={styles.card}>
     
        <Image
          source={require('../assets/img.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
        
          <Text style={styles.cardTitle}>{item.title}</Text>
          {item.subHeading.map((subItem, subIndex) => (
            <Text key={subIndex} style={styles.subHeading}>{subItem}</Text>
          ))}
        </View>
        <View style={styles.cardFooter}>
          <Text style={styles.price}>{item.price}</Text>
          <TouchableOpacity style={styles.upgradeButton}>
            <Text style={styles.upgradeText}>{item.type}</Text>
          </TouchableOpacity>
        </View>
        </View>
       
      </View>
    );

    return (
      <View style={styles.back}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: '#486284',
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
   marginLeft:20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
   marginTop:15,
   color:'white',
   marginLeft:15,
  
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 12,
    color: '#666',
    marginTop:4
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginLeft:20,
    marginBottom:10
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
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
  line: {
    width: '100%',
    marginTop: 8,
  },
});

export default TopSellers;
