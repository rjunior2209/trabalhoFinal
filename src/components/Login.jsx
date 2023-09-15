import React  ,{ useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { TextInput } from "react-native";
import MyButton from "./MyButton";



const Login = ({navigation}) => {
    
    const [email, setEmail] = useState()
    const [password,setPassword]= useState()


    return (
        <View style={styles.container}>
            <View> 
                 <Image 
            style={styles.image}
            source={{uri:'https://www.pngall.com/wp-content/uploads/13/Pokemon-Logo-PNG-Pic.png'}}
            />
            </View>    

            <View style={styles.Input}>
            <TextInput  placeholderTextColor='red'style={styles.textImput}
                placeholder={"Email"}
                onChangeText={setEmail}
                value={email}
            />
            <TextInput  placeholderTextColor='red'style={styles.textImput}
            placeholder={"password"}
            onChangeText={setPassword}
            value={password}
            />
            </View>
            <MyButton title='ENTRAR' onPressButton={() => navigation.navigate('Homed')}/>
        </View>
        
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
       alignItems:"center",
       justifyContent:"center",
        flex:1,
        backgroundColor:'#e8d209'
        
    },
    textImput:{
        width:250,
        borderWidth:2,
        borderRadius:10,
        padding:10,
        margin:15,
        borderColor:'black',
        backgroundColor:'white',
        textAlign:"center",
        placeHolderTextColor:'white'
        
    },
    image:{
        height:210,
        width:200,
        marginTop:-100
    },
    Input:{
        margin:40
    }


})

