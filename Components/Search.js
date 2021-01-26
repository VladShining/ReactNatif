import React,{ Component } from 'react';
import { StyleSheet, View , Button ,TextInput } from 'react-native'

class Search extends Component {
    render (){
        return(
            <View style ={{flex : 1 , marginTop:20}}>
                <TextInput style={styles.textinputs} placeholder="Titre"/>
                <Button title="Rechercher" onPress={()=>{}} />
            </View>
        )
    }
}
const styles  =StyleSheet.create( {
    textinputs:{
        flex :1,
        height: 50,
        backgroundColor: 'red'
    }
})

export default Search;