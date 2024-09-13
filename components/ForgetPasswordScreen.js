import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert ,Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class ForgotPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  handleSubmit = () => {
    const { email } = this.state;
    if (email.trim() === '') {
      Alert.alert('Error', 'Please enter your email address.');
      return;
    }
    Alert.alert('Success', 'A password reset link has been sent to your email address.');
 
    this.setState({ email: '' });
 
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
           <TouchableOpacity style={styles.backButton}onPress={() => this.props.navigation.goBack()}>
          <Image source={require('../assets/back.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.header}>
          <Icon name="lock" size={50} color="#313C4A" style={styles.icon} />
          <Text style={styles.headerText}>Forgot Password</Text>
          <Text style={styles.subHeaderText}>Enter your email address to receive a password reset link.</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            keyboardType="email-address"
            value={this.state.email}
            onChangeText={(text) => this.setState({ email: text })}
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
            <Text style={styles.buttonText}>Send Reset Link</Text>
          </TouchableOpacity>
        </View>
     
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 70,
   
  },
  icon: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    width:'80%',
    alignSelf:'center',
    marginBottom:170
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#313C4A',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
    width:'50%',
    alignSelf:'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#313C4A',
    textDecorationLine: 'underline',
    fontWeight:'bold'
  },
  backButton: {
    marginBottom: 40,
  },
  backIcon: {
    width: 20,
    height: 20,
    marginLeft:10,
    marginTop:10
  },
});

export default ForgotPasswordScreen;
