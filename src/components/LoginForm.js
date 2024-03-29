import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {
  Card,
  CardSection,
  Input,
  Button,
  TextButton,
  LinkButton,
} from './common';

class LoginForm extends Component {
  onLoginPress() {
    return;
  }
  //temporary, must use redux
  onSignUpPress() {
    Actions.signUp();
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Image
            source={require('../logo.png')}
            style={styles.imgStyle}
            resizeMode="contain"
          />
        </CardSection>
        <CardSection>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeTextStyle}>Welcome Back,</Text>
            <Text style={styles.continueTextStyle}>Sign in to continue</Text>
            <View style={styles.placeholderStyle} />
          </View>
        </CardSection>

        <CardSection>
          <Input label="Email" placeholder="JohnDoe@gmail.com" />
        </CardSection>

        <CardSection>
          <Input label="Password" placeholder="password" secureTextEntry />
        </CardSection>

        <CardSection>
          <View style={styles.textContainer}>
            <TextButton>Forgot Password?</TextButton>
            <Button onPress={this.onLoginPress}>Login</Button>
          </View>
        </CardSection>

        <CardSection>
          <View style={styles.container}>
            <View style={styles.placeholderStyle} />
            <Text> New User?</Text>
            <LinkButton onPress={this.onSignUpPress}>Sign Up</LinkButton>
          </View>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  imgStyle: {
    flex: 1,
    margin: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeTextStyle: {
    fontSize: 30,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  continueTextStyle: {
    color: '#c0c0c0',
  },
  placeholderStyle: {
    height: 60,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
};

export default LoginForm;
