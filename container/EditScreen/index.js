import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, ImageBackground, TouchableHighlight } from 'react-native';
import { bindActionCreators } from 'redux';
import * as actions from '../../actionCreators';
import { connect } from 'react-redux';

class EditScreen extends React.Component {
    static navigationOptions = {
        title: 'EditScreen',
    };

    constructor() {
        super();
        this.state = {
            value: null
        }
    }
    render() {
        const { type } = this.props.navigation.state.params;
        return (
            <ImageBackground source={require('../../assets/submit.jpg')} resizeMode={'cover'} style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>
                    <Text style={{ fontSize: 20, marginBottom: 10, color: 'white' }}>Enter the amount of {type == 'water' ? 'water consumed' : type == 'workout' ? 'workout done' : 'hours slept'}</Text>
                    <TextInput
                        keyboardType="numeric"
                        returnKeyType="go"
                        maxLength={3}
                        style={styles.inputStyle}
                        value={this.state.value} //here
                        onChangeText={(val) => { this.setState({ value: val }) }}
                    />
                    <TouchableHighlight
                        style={styles.submit}
                        onPress={() => this.actionDifferentiator()}
                        underlayColor='#fff'>
                        <Text style={styles.submitText}>Submit</Text>
                    </TouchableHighlight>
                </View>
            </ImageBackground>
        )
    }

    actionDifferentiator() {
        const { type } = this.props.navigation.state.params;
        if (type == 'water') this.props.action.updateWaterConsumption(this.state.value)
        else if (type == 'workout') this.props.action.updateWorkoutHours(this.state.value)
        else if (type == 'sleep') this.props.action.updateSleepHours(this.state.value)
        this.props.navigation.goBack();
    }
}

const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(actions, dispatch)
})

export default connect(null, mapDispatchToProps)(EditScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputStyle: {
        height: 30,
        width: 150,
        marginBottom: 10,
        borderColor: 'grey',
        borderWidth: 2,
        textAlign: 'center',
        color: 'black',
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.5)'
    },
    submit: {
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    submitText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15
    }
})

