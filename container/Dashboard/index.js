import React from 'react';
import { View, StyleSheet,ImageBackground } from 'react-native';
import DasboardCards from '../../component/DashboardCards';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    static navigationOptions = {
        title: 'Dashboard',     
      };
    render() {
        return (
            <ImageBackground source={require('../../assets/fitnessbg.jpg')} resizeMode={'cover'} style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
                <DasboardCards leftPart={"Water Consumption"} type={'water'} value={this.props.waterconsumption} rightPart={`${this.props.waterconsumption} Gallons`} navigate={data => this.navigateToEditScreen(data)} />
                <DasboardCards leftPart={"Workout Mintues"} type={"workout"} value={this.props.workoutminute} rightPart={`${this.props.workoutminute} minutes`} navigate={data => this.navigateToEditScreen(data)} />
                <DasboardCards leftPart={"Sleep Hours"} type={"sleep"} value={this.props.sleephours} rightPart={`${this.props.sleephours} hours`} navigate={data => this.navigateToEditScreen(data)} />
            </View>
            </ImageBackground>
        )
    }

    navigateToEditScreen(data) {
        console.log("date===.",data)
        this.props.navigation.navigate('EditScreen', data);
    }
}

const mapStateToProps = (state) => {
    return {
        waterconsumption: state.today_water_consumption,
        workoutminute: state.today_workout_minutes,
        sleephours: state.today_sleep_hours
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})

export default connect(mapStateToProps, null)(Dashboard);