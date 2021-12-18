import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Header, Icon } from 'react-native-elements';
import firebase from 'firebase';

import db from '../config.js';

export default class InformationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: firebase.auth().currentUser.email,
      name: this.props.navigation.getParam('details')['name'],
      experience: this.props.navigation.getParam('details')['experience'],
      family: this.props.navigation.getParam('details')['isFamily'],
    };
  }

  getRecieverDetails() {
    db.collection('users')
      .where('user_name', '==', this.state.name)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.setState({
            name: doc.data().first_name,
            experience: doc.data().experience,
            family: doc.data().isFamily,
          });
        });
      });
  }

  componentDidMount() {
    this.getRecieverDetails();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.1 }}>
          <Header
            leftComponent={
              <Icon
                name="arrow-left"
                type="feather"
                color="#696969"
                onPress={() => this.props.navigation.navigate('FamilyRead')}
              />
            }
            centerComponent={{
              text: 'Information',
              style: { color: '#90A5A9', fontSize: 20, fontWeight: 'bold' },
            }}
            backgroundColor="#eaf8fe"
          />
        </View>
        <View style={{ flex: 0.3 }}>
          <Card title={'Experience Details'} titleStyle={{ fontSize: 20 }}>
            <Card>
              <Text style={{ fontWeight: 'bold' }}>
                Name : {this.state.name}
              </Text>
            </Card>
            <Card>
              <Text style={{ fontWeight: 'bold' }}>
                Type : {this.state.family}
              </Text>
            </Card>
            <Card>
              <Text style={{ fontWeight: 'bold' }}>
                Experience : {this.state.experience}
              </Text>
            </Card>
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'orange',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 16,
  },
});
