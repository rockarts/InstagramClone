import React from 'react';
import Tags from './Tags.js'
import { Image, WebView, StyleSheet, ActivityIndicator, Text, View, ScrollView  } from 'react-native';

const styles = StyleSheet.create({
    header: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20,
      padding: 20,
      width: 100+'%',
      textAlign: 'center'
    },
  });

export default class Practice extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://flit-api.azurewebsites.net/api/phone/content/2?format=json')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)

        var header = responseJson.data.filter(element => element.fileName === "header.png" || element.fileName === "header.jpg" )
        
        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
          test: responseJson,
          header: header
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/> 
        </View> 
      )
    }

    console.log(this.state.header[0].fileURL)

    return(        
      <View style={{flex: 1, paddingTop:20}}>
      <Image source={{uri: this.state.header[0].fileURL, width:100+'%', height: 150}} />
      <Text style={styles.header}>{this.state.test.title}</Text>
      <View><Tags test={this.state.test.tags}/></View>
      <WebView
            originWhitelist={['*']}
            source={{html: this.state.test.content}}
        />
      </View>
    )
  }  
}