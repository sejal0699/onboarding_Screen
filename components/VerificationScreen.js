import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';

class VerificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ['', '', '', '', '', ''],
    };
  }

  handleTextChange = (text, index) => {
    const { code } = this.state;
    code[index] = text;
    this.setState({ code });

    if (text && index < 5) {
      this[`input_${index + 1}`].focus(); 
    }
  };

  handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !this.state.code[index]) {
      if (index > 0) {
        this[`input_${index - 1}`].focus(); 
      }
    }
  };

  handleSubmit = () => {
    const { code } = this.state;
    console.log('Submitted code:', code.join(''));
    
 
    this.props.navigation.navigate('home');
  };

  render() {
    const { code } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
          <Image source={require('../assets/back.png')} style={styles.backIcon} />
        </TouchableOpacity>

        <Text style={styles.header}>Verify Email</Text>
        <Text style={styles.subHeader}>Enter the code that we just sent to you on 
        hcankit7@gmail.com.</Text>
        <Text style={styles.textCode}>6-digit Code</Text>
        <View style={styles.codeInputContainer}>
          {code.map((value, index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              keyboardType="numeric"
              maxLength={1}
              value={value}
              onChangeText={(text) => this.handleTextChange(text, index)}
              onKeyPress={(e) => this.handleKeyPress(e, index)}
              ref={(input) => { this[`input_${index}`] = input; }}
            />
          ))}
        </View>
        <TouchableOpacity>
          <Text style={styles.textCode}>Resend</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={this.handleSubmit}>
          <Text style={styles.loginButtonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 100,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 80,
  },
  loginButton: {
    backgroundColor: '#313C4A',
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
    borderRadius: 30,
  },
  textCode: {
    color: '#7B8293',
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    marginBottom: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  subHeader: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 20,
  },
  codeInput: {
    width: 40,
    height: 40,
    borderColor: '#77829F',
    borderWidth: 1,
    borderRadius: 5,
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
  },
  resendText: {
    fontSize: 14,
    marginTop: 20,
    color: '#555',
  },
  link: {
    color: '#007BFF',
  },
});

export default VerificationScreen;
