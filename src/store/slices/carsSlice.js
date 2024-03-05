import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    cars : [],
    trigger: null,
    carUpdate: null
}

const carsSlice = createSlice({
    name:'carsSlice',
    initialState,
    reducers:{
        setResponse: (state, action) => {
            state.cars = action.payload;
        },
        trigger: state => {
            state.trigger = !state.trigger;
        },
        setCarUpdate: (state, action) => {
            state.setCarUpdate = action.payload;
        }

    }
})
const {reducer: carsReducer, actions} = carsSlice;

const carsActions = {
    ...actions
}

export {
    carsReducer,
    carsActions
}