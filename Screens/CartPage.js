import React from 'react';  
//import react in our code.  
import { StyleSheet, View, Button, TextInput } from 'react-native';  
  
export default class HomeScreen extends React.Component {  
  
    constructor(props) {  
        //constructor to set default state  
        super(props);  
        this.state = {  
            username: '',  
        };  
    }  
    static navigationOptions = {  
        title: 'Home',  
        headerStyle: {  
            backgroundColor: '#f4511e',  
        },  
        //headerTintColor: '#0ff',  
        headerTitleStyle: {  
            fontWeight: 'bold',  
        },  
    };  
  
    render() {  
        const { navigate } = this.props.navigation;  
        return (  
            //View to hold our multiple components  
            <View style={styles.container}>  
            {/*Input to get the value from the user*/}  
            <TextInput  
        value={this.state.username}  
        onChangeText={username => this.setState({ username })}  
        placeholder={'Enter Any value'}  
        style={styles.textInput}  
        />  
        <View style={styles.buttonStyle}>  
            <Button  
        title="Checkout"  
        // color="#00B0FF"  
        onPress={() =>  
        this.props.navigation.navigate('OrderConfirmation', {  
            userName: this.state.username,  
        })  
    }  
        />  
        </View>  
        </View>  
    );  
    }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: '#fff',  
        alignItems: 'center',  
        padding: 16,  
    },  
    textInput: {  
        height: 45,width: "95%",borderColor: "gray",borderWidth: 1,fontSize:20,  
    },  
    buttonStyle:{  
        width: "93%",  
        marginTop: 50,  
        backgroundColor: "red",  
    }  
});