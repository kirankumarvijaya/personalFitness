import React from 'react';
import { View, Dimensions, StyleSheet, Text, Button } from 'react-native';
const { height, width } = Dimensions.get('window');

export default DashboardCards = (props) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardStyle}>
                <View style={styles.textStyle}>
                    <Text style={styles.leftTextStyle}>Todays {props && props.leftPart}:</Text>
                    <Text style={styles.rightTextStyle}>{props && props.rightPart}</Text>
                </View>
                <View style={styles.buttonStyle}>
                    <Button title={"Edit"} onPress={() => props.navigate(props)}></Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: width * 0.7,
        height: height * 0.11,
        backgroundColor:'rgba(255,255,255,0.5)',
        borderRadius: 5,
        padding:10
    },
    cardStyle: {
        flex: 1,
        flexDirection: 'column',
        textAlign: 'center',
        paddingVertical: 3
    },
    textStyle: {
        flexDirection: 'row',
    },
    leftTextStyle: {
        flex: 0.5,
        textAlign: 'right',
        color:'red',
        fontWeight:'bold'
    },
    rightTextStyle: {
        paddingLeft: 10,
        flex: 0.5,
        textAlign: 'left',
        textAlignVertical:'center',
        color:'blue',
        fontWeight:'bold'

    },
    buttonStyle: {
       justifyContent:'center',
       alignItems:'center'
    }
})