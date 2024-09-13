import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Cards from './Cards';
import CardContainer from './CardContainer';
import TopSellers from './TopSellers';

import TickItem from './TickItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContext } from '@react-navigation/native';
class HomePage extends Component {
  static contextType = NavigationContext;
  state = {
    activeSlide: 0,
  };
  handleLogout = async () => {
    try {
        const token = await AsyncStorage.getItem('authToken');
        if (token !== null) {       
            console.log('Token is', token);
        } else {
            console.log('No token found');
        }

        await AsyncStorage.removeItem('authToken');
        const navigation = this.context;
        navigation.navigate('login');
            // navigation.reset({
            //     index: 0,
            //     routes: [{ name: 'login' }],
            // });
        
    } catch (error) {
        console.error('Failed to logout:', error);
    }
};
  render() {
    const { activeSlide } = this.state;
    const vacuums = ['Vacuums', 'Vacuums', 'Vacuums', 'Vacuums'];
    const towelStations = ['Towel Station', 'Towel Station', 'Towel Station', 'Towel Station'];

    return (
      <View style={styles.cont}>
        <Header/>
      <SafeAreaView style={styles.container}>
      {/* <Text onPress={this.handleLogout}>Logout</Text> */}
        <ScrollView>
          <View style={styles.rectangle}>
            <View style={styles.imageWrapper} >
              <Image source={require('../assets/sq.png')} style={styles.iconImage} />
              <Image source={require('../assets/gallery.png')} style={styles.overlayImage} />

            </View>
            <View style={styles.pagination}>
          <View style={[styles.dot, activeSlide === 0 ? styles.activeDot : null]} />
          <View style={[styles.dot, activeSlide === 1 ? styles.activeDot : null]} />
        </View>
          </View>

          <View>
            <CardContainer />
          </View>

          <View style={styles.balanceCard}>
            <View style={styles.cardRow}>
              <View style={styles.textColumn}>
                <View style={styles.textTitle}>
                  <Text style={styles.balanceTitle}>Never Miss a Wash – </Text>
                  <Text style={styles.balanceTitle1}>Set your Reminders!</Text>
                </View>
                <Text style={styles.bottomText}>Set Email & SMS Alerts to Keep Your Wash Visits on Track!</Text>
                <TouchableOpacity style={styles.loginButton}>
                  <Text style={styles.loginButtonText}>Set Reminder</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.textBoxContainer}
            >
              <View style={styles.packageCard}>
                <View style={styles.cardRow}>
                  <Image source={require('../assets/crown.png')} style={styles.galleryIcon} />
                  <View style={styles.textColumn}>
                    <View style={styles.cardFooter}>
                      <View style={styles.text}>
                        <Text style={styles.heading}>YOU HAVE</Text>
                        <Text style={styles.packageTitle}>Package Name</Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={styles.contentContainer}>
                  <View style={styles.tickContainer}>
                    <TickItem items={vacuums} />
                    <TickItem items={towelStations} />
                  </View>
                </View>
              </View>

              <View style={styles.packageCard}>
                <View style={styles.cardRow}>
                  <View style={styles.textColumn}>
                    <View style={styles.cardFooter}>
                      <View style={styles.text}>
                        <Text style={styles.packageTitle}>Package Name</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <TopSellers/>
          <Cards />
        </ScrollView>
        <Footer />
      </SafeAreaView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  heading: {
    color: 'black',
  },
  cont:{
flex:1
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom:40,
  
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot:{
    backgroundColor: '#007bff',
  },
  loginButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
    width: '80%',
    alignSelf: 'center',
  },
  loginButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textTitle: {
  
  },
  tickContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    paddingHorizontal: 5,
    gap:10
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
  cardRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
 
  },
  textBoxContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  line: {
    width: '100%',
    marginBottom: 4,
  },
  cardRows: {
    flexDirection: 'row',
    gap: 2,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subHeading: {
    fontSize: 10,
  },
  textColumn: {
    flexDirection: 'column',
    marginLeft: 10,
    flex: 1,
  },
  text: {
    flexDirection: 'column',
  },
  textBox: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    marginRight: 8,
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  heder: {
    backgroundColor: 'red',
  },
  icon: {
    fontSize: 24,
    marginLeft: 15,
  },
  balanceCard: {
    padding: 14,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 16,
    backgroundColor: '#486284',
    margin: 18,
  },
  card1: {
    flexDirection: 'row',
  },
  packageCard: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 16,
    backgroundColor: '#ffffff',
    margin: 15,
    width: '70%',
  },
  packageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  balanceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop:10
  },
  balanceTitle1: {
    fontSize: 18,
    fontWeight: 'bold',
  marginTop:2,
    color: 'white',
   
  },
  
  bottomText: {
    fontSize: 14,
    color: 'white',
    marginTop:7
  },
  cardFooter: {
    flexDirection: 'column',
  },
  contentContainer: {
    paddingTop: 0,
    marginTop:10
  },
  balanceCardFooter: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 46,
  },
  detailsButton: {
    backgroundColor: '#FFD700',
    padding: 8,
    borderRadius: 5,
  },
  detailsText: {
    color: 'black',
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 15,
  },
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 16,
    backgroundColor: '#fff',
    margin: 15,
  },
  cardContent: {
    flexDirection: 'column',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  upgradeButton: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  upgradeText: {
    color: 'black',
  },
  rectangle: {},
  galleryIcon: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  imageWrapper: {
    position: 'relative',
    width: 100,
    height: 200,
  },
  iconImage: {
    width: 600,
    height: 200,
    marginTop: 10,
  },
  overlayImage: {
    position: 'absolute',
    top: '55%',
    left: '200%',
    width: 50,
    height: 50,
    transform: [{ translateX: -20 }, { translateY: -20 }],
  },
});

export default HomePage;
