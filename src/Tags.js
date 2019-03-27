import React from 'react';
import { Button, StyleSheet, FlatList, Text, View, Alert  } from 'react-native';

const styles = StyleSheet.create({
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      backgroundColor: "gray"
    }
  })

export default class Tags extends React.Component {

    constructor(props) {
        super(props)        
        let tags = JSON.parse(this.props.test)
       // tags.forEach(element => console.log(element))
        this.state = { tags: tags}
    }

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    render(){
        return(
            <View style={{justifyContent: 'flex-start'}}>
                <FlatList horizontal
                data={this.state.tags}
                  renderItem={({ item, index}) => {                      
                      console.log(`Item = ${item}, index = ${index}`);
                      return (<Text style={styles.item}>{item}</Text>)
                  }}
                  keyExtractor={(item, index) => index.toString()}
                />
            </View> 
          )
    }
}