import React from 'react';
import { Image, WebView, StyleSheet, ActivityIndicator, Text, View} from 'react-native';

export default class ActivityList extends React.Component {

    constructor(props){
        super(props);
        //this.state ={ isLoading: true}
      }

    render(){
    
        return(
        <View style={{flex: 1, padding: 20}}>
            <Text>Helllllloooooooo List</Text>
        </View> 
        )
    }

}

// fetch('https://mywebsite.com/endpoint/', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     firstParam: 'yourValue',
//     secondParam: 'yourOtherValue',
//   }),
// });