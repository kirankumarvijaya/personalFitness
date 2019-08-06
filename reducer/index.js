import { UPDATE_SLEEP_HOURS, UPDATE_WATER_CONSUMPTION, UPDATE_WORKOUT_HOURS, GET_UPDATED_LIST } from '../actionTypes';
const initialState = {
    today_water_consumption: 0,
    today_workout_minutes: 0,
    today_sleep_hours: 0,
    datewiseList: [{
        '02/08/2019':{
            'today_sleep_hours': 8,
            'today_water_consumption': 12,
            'today_workout_minutes': 30
        }
    },
        {
        '03/08/2019':{
            'today_sleep_hours': 8,
            'today_water_consumption': 12,
            'today_workout_minutes': 30
        }
    },
        {
            '04/08/2019':{
                'today_sleep_hours': 8,
                'today_water_consumption': 12,
                'today_workout_minutes': 30
            }
        },
        {
        '05/08/2019':{
            'today_sleep_hours': 8,
            'today_water_consumption': 12,
            'today_workout_minutes': 30
        }
    }]
}

export default (prevState = initialState, action) => {
    switch (action.type) {
        case UPDATE_WATER_CONSUMPTION: {
            let valueAddedArray = addListtoDatewise(action.data, 'water', prevState.datewiseList);
            return {
                ...prevState,
                today_water_consumption: prevState.today_water_consumption + parseInt(action.data),
                datewiseList:valueAddedArray
            }
        }
        case UPDATE_WORKOUT_HOURS: {
            let valueAddedArray = addListtoDatewise(action.data, 'workout', prevState.datewiseList);
            return {
                ...prevState,
                today_workout_minutes: prevState.today_workout_minutes + parseInt(action.data),
                datewiseList:valueAddedArray
            }
        }
        case UPDATE_SLEEP_HOURS: {
            let valueAddedArray = addListtoDatewise(action.data, 'sleep', prevState.datewiseList);
            return {
                ...prevState,
                today_sleep_hours: prevState.today_sleep_hours + parseInt(action.data),
                datewiseList:valueAddedArray
            }
        }
        case GET_UPDATED_LIST:{
            console.log("called2")
            return {
                ...prevState
            }
        }
        default: {
            return {
                ...initialState
            }
        }
    }
}

function addListtoDatewise(data, type, list) {
    let date = getDateFunction(); //get the date of the current submission;
    if (list.length === 0) // array is empty
    {
        let obj = {
            [date]: {
                today_water_consumption: (type == 'water' ? data : 0),
                today_workout_minutes: (type == 'workout' ? data : 0),
                today_sleep_hours: (type == 'sleep' ? data : 0),
            }
        }
        list.push(obj);
        return list;
    }
    else { // if it is in the same day
        let flag = false; // for determining whether the date is present in here or not true is set when no date matches
        for(i=0;i<list.length;i++)
        {
            let dateinArray = Object.keys(list[i])[0]; //get the date
            if(dateinArray==date){ //if the date is already present
                flag=false;
                list[i][dateinArray]['today_water_consumption'] = type === 'water' ? data : list[i][dateinArray]['today_water_consumption'];
                list[i][dateinArray]['today_workout_minutes'] = type === 'workout' ? data : list[i][dateinArray]['today_workout_minutes'];
                list[i][dateinArray]['today_sleep_hours'] = type === 'sleep' ? data : list[i][dateinArray]['today_sleep_hours']; 
                return list;
            }
            else{
                flag =true; //setting it because no date is matched
            }
        }
        if(flag){
            let obj = {
                [date]: {
                    today_water_consumption: (type == 'water' ? data : 0),
                    today_workout_minutes: (type == 'workout' ? data : 0),
                    today_sleep_hours: (type == 'sleep' ? data : 0),
                }
            }
            list.push(obj);
            flag=false;
            return list;
        }

    }  
}

function getDateFunction() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!

    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    return `${dd}/${mm}/${yyyy}`;
}