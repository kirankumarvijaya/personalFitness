import React from 'react';
import { View, Text, StyleSheet, StatusBar,ScrollView, Dimensions,ImageBackground } from 'react-native';
import * as actions from '../../actionCreators';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

const { height, width } = Dimensions.get('window');

class History extends React.Component {

    constructor(){
        super();
        this.state={
            historyArray:null
        }
    }

    _renderEachItem = (item) => {
        let key = Object.keys(item)[0];
        return (
            <View style={styles.flexStyle}>
                <Text style={{ fontWeight: 'bold', paddingBottom: 5,color:'gold',fontSize:15}}>{key}</Text>
                <Text style={{color:'darkgreen',fontWeight:'bold'}}>{'\u2022' + " "}Total Water Consumed: {item[key].today_water_consumption} gallons</Text>
                <Text style={{color:'darkgreen',fontWeight:'bold'}}>{'\u2022' + " "}Total Workout Done: {item[key].today_workout_minutes} minutes</Text>
                <Text style={{color:'darkgreen',fontWeight:'bold'}}>{'\u2022' + " "}Total sleep hours: {item[key].today_sleep_hours} hours</Text>
            </View>
        )
    }

    componentDidMount() {
        this.props.navigation.addListener('willFocus', ()=>{
            this.setState({
                historyArray:this.props.historyArray
            })
        });
      }

    render() {
        console.log("valuesss===>",this.props.historyArray.reverse())
        return (
            <ImageBackground source={require('../../assets/history.jpg')} resizeMode={'cover'} style={{ width: '100%', height: '100%' }}>
            <StatusBar barStyle="light-content" />
            <ScrollView contentContainerStyle={styles.container}>
                {this.props.historyArray.reverse().map((item, key) => {
                    return (
                        <View key={key} style={styles.flatlistCard}>
                            {this._renderEachItem(item)}
                        </View>
                    )
                })}
            </ScrollView>
            </ImageBackground>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("called3")
    return {
        historyArray: state.datewiseList.reverse()
    }
}

const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(actions, dispatch)
})

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 40
    },
    flatlistCard: {
        height: height * 0.23,
        width: width * 0.7,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#ddd',
        marginBottom:10,
        backgroundColor:'rgba(255,255,255,0.5)',

    },
    flexStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(History);