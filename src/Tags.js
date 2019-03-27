import React from 'react';
import { Button, StyleSheet, FlatList, Text, View, Alert  } from 'react-native';

const styles = StyleSheet.create({
    item: {
      padding:11,
      margin: 5,
      fontSize: 12,
      height: 44,
      color: 'white',
      backgroundColor: "gray",
      borderRadius: 20
    }
  })

export default class Tags extends React.Component {

    constructor(props) {
        super(props)        
        let tags = JSON.parse(this.props.test)
       // tags.forEach(element => console.log(element))
        this.state = { tags: tags}
    }

    componentDidMount(){
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