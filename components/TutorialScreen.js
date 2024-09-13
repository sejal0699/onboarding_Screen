import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

class TutorialScreen extends Component {
  state = {
    activeSlide: 0,
  };

  handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const currentSlide = Math.round(scrollPosition / width);
    this.setState({ activeSlide: currentSlide });
  };

  handleContinue = () => {
    this.props.navigation.replace('login'); 
  };

  render() {
    const { activeSlide } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={this.handleScroll}
          scrollEventThrottle={16}
        >
          
          <View style={styles.screen}>
            <Image source={require('../assets/onboard.jpg')} style={styles.image} />
            <Text style={styles.title}>Welcome to the Tutorial</Text>
            <Text style={styles.description}>
              Learn how to use our app with this brief tutorial. We'll guide you through the main features and help you get started.
            </Text>
          </View>

         
          <View style={styles.screen}>
            <Image source={require('../assets/tuto.jpg')} style={styles.image} />
            <Text style={styles.title}>Discover New Features</Text>
            <Text style={styles.description}>
              Explore more advanced features and get the most out of our app. Get Started!
            </Text>
          </View>
        </ScrollView>

        <View style={styles.pagination}>
          <View style={[styles.dot, activeSlide === 0 ? styles.activeDot : null]} />
          <View style={[styles.dot, activeSlide === 1 ? styles.activeDot : null]} />
        </View>

      
        <TouchableOpacity style={styles.button} onPress={this.handleContinue}>
          <Text style={styles.buttonText}>
            {activeSlide === 1 ? 'Get Started' : 'Swipe'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  screen: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom:20
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 25,
    position: 'absolute',
    bottom: 100,
   alignSelf:'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom:40
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#007bff',
  },
});

export default TutorialScreen;
