import { createSlice } from '@reduxjs/toolkit'

const initialApartmentState = { 
    details:[],

}
const apartmentSlice = createSlice({
    name: 'apartment',
    initialState:initialApartmentState,
    reducers: {
        add(state, action){
            state.details = action.payload
        },
    }
});

export const apartmentActions = apartmentSlice.actions
export default apartmentSlice.reducer