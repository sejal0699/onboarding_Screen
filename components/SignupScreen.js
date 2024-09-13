import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavigationContext } from '@react-navigation/native';

class SignupScreen extends Component {
  static contextType = NavigationContext;

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      phone: '',
      confirmPassword: '',
      errors: {},
    };
  }

  handleInputChange = (field, value) => {
    this.setState({ [field]: value });
  };

  validateInputs = () => {
    const { email, password, firstName, lastName, confirmPassword } = this.state;
    const errors = {};
    let isValid = true;

  
    if (!firstName.trim()) {
      errors.firstName = 'First Name is required';
      isValid = false;
    }
    if (!lastName.trim()) {
      errors.lastName = 'Last Name is required';
      isValid = false;
    }
    if (!email.trim()) {
      errors.email = 'Email Address is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email Address is invalid';
      isValid = false;
    }
    if (!password) {
      errors.password = 'Password is required';
      isValid = false;
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  handleRegister = () => {
    if (this.validateInputs()) {
      const navigation = this.context;
      navigation.navigate('verify');
    }
  };

  render() {
    const { email, password, firstName, lastName, phone, confirmPassword, errors } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton}onPress={() => this.props.navigation.goBack()}>
          <Image source={require('../assets/back.png')} style={styles.backIcon} />
        </TouchableOpacity>

        <View style={styles.signupBox}>
          <Text style={styles.title}>Create Your Account</Text>
          <Text style={styles.subtitle}>Enter in your credentials</Text>

          <TextInput
            style={[styles.input, errors.firstName && styles.inputError]}
            placeholder="First Name"
            value={firstName}
            onChangeText={(value) => this.handleInputChange('firstName', value)}
            placeholderTextColor="#4D5876"
          />
          {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}

          <TextInput
            style={[styles.input, errors.lastName && styles.inputError]}
            placeholder="Last Name"
            value={lastName}
            onChangeText={(value) => this.handleInputChange('lastName', value)}
            placeholderTextColor="#4D5876"
          />
          {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}

          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            placeholder="Email Address"
            value={email}
            onChangeText={(value) => this.handleInputChange('email', value)}
            placeholderTextColor="#4D5876"
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Phone Number (optional)"
            value={phone}
            onChangeText={(value) => this.handleInputChange('phone', value)}
            placeholderTextColor="#4D5876"
          />

          <View style={styles.passwordBox}>
            <TextInput
              style={[styles.passwordInput, errors.password && styles.inputError]}
              placeholder="Password"
              value={password}
              onChangeText={(value) => this.handleInputChange('password', value)}
              placeholderTextColor="#4D5876"
              secureTextEntry
            />
           
            <Image source={require('../assets/eye.png')} style={styles.eyeIcon} />
      
          </View>
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

          <View style={styles.passwordBox}>
            <TextInput
              style={[styles.passwordInput, errors.confirmPassword && styles.inputError]}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={(value) => this.handleInputChange('confirmPassword', value)}
              placeholderTextColor="#4D5876"
              secureTextEntry
            />
            {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
            <Image source={require('../assets/eye.png')} style={styles.eyeIcon} />
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={this.handleRegister}>
            <Text style={styles.loginButtonText}>Set up Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 40,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  signupBox: {
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000',
  },
  subtitle: {
    fontSize: 14,
    color: '#4F5F72',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 10,
    padding: 18,
    fontSize: 16,
    marginBottom: 20,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 10,
    marginBottom: 10,
    marginTop:0,

    borderColor:'red',

  },
  passwordBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: '#999999',
  },
  loginButton: {
    backgroundColor: '#313C4A',
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignupScreen;
