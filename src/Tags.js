import React from 'react';
import { Button, StyleSheet, ActivityIndicator, Text, View, ScrollView  } from 'react-native';

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

export default class Tags extends React.Component {

    constructor(props) {
        super(props)        
        let tags = JSON.parse(this.props.test)
        tags.forEach(element => console.log(element))
        this.state ={ tags: tags}
    }

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    render(){
        return(
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', padding: 20, border:1}}>
                  
                <Button
                    onPress={this._onPressButton}
                    title={this.state.tags[0]}
                />
            </View> 
          )
    }
}