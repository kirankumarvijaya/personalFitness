import { UPDATE_SLEEP_HOURS, UPDATE_WATER_CONSUMPTION, UPDATE_WORKOUT_HOURS,GET_UPDATED_LIST } from './actionTypes';

export const updateWaterConsumption = (data) => {
    return {
        type: UPDATE_WATER_CONSUMPTION,
        data
    }
}

export const updateWorkoutHours = data => {
    return {
        type: UPDATE_WORKOUT_HOURS,
        data
    }
}

export const updateSleepHours = data => {
    return {
        type: UPDATE_SLEEP_HOURS,
        data
    }
}
export const getUpdatedList = () => {
    console.log("called");
    return {
        type:GET_UPDATED_LIST
    }
}