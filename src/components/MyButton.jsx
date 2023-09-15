import { StyleSheet, Text ,TouchableOpacity, View } from "react-native";



const MyButton = ({title,onPressButton}) => {
    return (
        <TouchableOpacity onPress={onPressButton}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonTitle}>{title}</Text>
            </View>
        </TouchableOpacity>
        
    );
}

export default MyButton;
const styles = StyleSheet.create({
    buttonContainer:{
        shadowRadius:5,
        shadowOpacity:0.8,
        shadowColor:'#212121',
        padding:8,
        borderRadius:10,
        backgroundColor:'blue',
        margin:4
    },
            buttonTitle:{
                color:'#fff',
                fontSize:18

            }
})