import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InstaClone  from './src/InstaClone.js'
import Activity  from './src/Activity.js'
import ActivityList  from './src/ActivityList.js'
export default class App extends React.Component {
  render() {
    return (
      <ActivityList />
      // <InstaClone />
    );
  }
}