import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContext } from '@react-navigation/native';

class LoginScreen extends Component {
  static contextType = NavigationContext;

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
  }

  handleEmailChange = (email) => {
    this.setState({ email }, this.validateInputs);
  };

  handlePasswordChange = (password) => {
    this.setState({ password }, this.validateInputs);
  };

  validateInputs = () => {
    const { email, password } = this.state;
    const errors = {};

    if (!email.trim()) {
      errors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email Address is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    }

    this.setState({ errors });
  };

  handleLogin = async () => {

    this.validateInputs();
    this.setState((prevState) => {
      const { errors } = prevState;
      const { email, password } = this.state;
      console.log('Validation errors:', errors);

      if (Object.keys(errors).length === 0 && email && password) {
        return new Promise(async (resolve) => {
          try {
            const token = 'dummyToken';
            console.log('Generated token:', token);
            
            await AsyncStorage.setItem('authToken', token);
            this.setState({ email: '', password: '', errors: {} });
            
            const navigation = this.context;
            navigation.navigate('home');
          } catch (error) {
            console.error('Login failed:', error);
          } finally {
            resolve(); 
          }
        });
      } else {
        console.warn('Login attempt with validation errors or missing fields.');
      }
    });
  };
  

  handleClickPassword = () => {
    const navigation = this.context;
    navigation.navigate('forgetPassword');
  };

  async componentDidMount() {
    try {
      const token = await AsyncStorage.getItem('authToken');
      console.log('token obtained is',token);
      
      if (token) {
        const navigation = this.context;
        navigation.navigate('home');
      }
    } catch (error) {
      console.error('Failed to retrieve token:', error);
    }
  }

  render() {
    const { email, password, errors } = this.state;

    return (
      <View style={styles.container}>
        {/* <TouchableOpacity style={styles.backButton}>
          <Image source={require('../assets/back.png')} style={styles.backIcon} />
        </TouchableOpacity> */}

        <View style={styles.loginBox}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Continue with your valid credentials</Text>

          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            placeholder="Email Address"
            value={email}
            onChangeText={this.handleEmailChange}
            placeholderTextColor="#4D5876"
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          <View style={styles.passwordBox}>
            <TextInput
              style={[styles.passwordInput, errors.password && styles.inputError]}
              placeholder="Password"
              value={password}
              onChangeText={this.handlePasswordChange}
              placeholderTextColor="#4D5876"
              secureTextEntry
            />
           
            <Image
              source={require('../assets/eye.png')}
              style={styles.eyeIcon}
            />
          </View>
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

          <TouchableOpacity onPress={this.handleClickPassword}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={this.handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.signUpText}>
            Don't have an account? <Text style={styles.signInLink} onPress={() => this.context.navigate('signup')}>Sign up</Text> now
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 120,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  loginBox: {
    marginTop: 60,
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
    fontSize: 12,
    marginBottom: 10,
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
  forgotPassword: {
    textAlign: 'right',
    color: '#000000',
    marginBottom: 30,
    fontSize: 14,
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
  signUpText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 14,
  },
  signInLink: {
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
