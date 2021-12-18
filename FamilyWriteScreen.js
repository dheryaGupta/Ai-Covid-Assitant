import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import AppHeader from '../components/AppHeader';

export default class FamilyWriteScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      experience: '',
      isFamily: '',
    };
  }
  addExperience = () => {
    db.collection('experience').add({
      name: this.state.name,
      experience: this.state.experience,
      isFamily: this.state.isFamily,
    });
    this.setState({
      name: '',
      experience: '',
      isFamily:''
    });
    //ToastAndroid.show('Story Submitted', ToastAndroid.SHORT);
    alert('Experience Submitted Successfully');
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader title="Your Covid Story" navigation={this.props.navigation}/>
        <View>
          <TextInput
            style={styles.textBox}
            placeholder="Enter Your Name"
            onChangeText={(text) => {
              this.setState({
                name: text,
              });
            }}
            value={this.state.name}
          />

          <TextInput
            style={styles.textBox}
            placeholder="Are You A Family Or A Covid Patient"
            multiline={true}
            onChangeText={(text) => {
              this.setState({
                isFamily: text,
              });
            }}
            value={this.state.isFamily}
          />
           <TextInput
            style={styles.textBox2}
            placeholder="Enter Your Experience"
            multiline={true}
            onChangeText={(text) => {
              this.setState({
                experience: text,
              });
            }}
            value={this.state.experience}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              this.addExperience();
            }}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textBox: {
    width: 250,
    height: 30,
    borderWidth: 2,
    marginTop: 20,
    marginLeft: 50,
  },
  textBox2: {
    width: 250,
    height: 200,
    borderWidth: 2,
    marginTop: 20,
    marginLeft: 50,
  },
  submitButton: {
    width: 100,
    height: 30,
    borderWidth: 2,
    marginTop: 10,
    marginLeft: 120,
    backgroundColor: 'magenta',
  },
  submitText: {
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
  },
});
