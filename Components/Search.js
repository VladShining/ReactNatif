import React,{Component} from 'react';
import { View , Button ,TextInput } from 'react-native'

class Search extends Component {
    render (){
        return(
            <View style ={{marginTop:20}}>
                <TextInput style={styles.textinputs} placeholder="Titre"/>
                <Button title="Rechercher" onPress={()=>{}} />
            </View>
        )
    }
}
const styles  = {
    textinputs:{
        height: 50,
        backgroundColor: 'red'
    }
}
export default Search;