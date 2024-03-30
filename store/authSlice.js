import { createSlice } from '@reduxjs/toolkit'

const initialLoginState = { 
    isAuthenticated: false,
    userDetails:[]
}
const authSlice = createSlice({
    name: 'authentication',
    initialState:initialLoginState,
    reducers: {
        login(state, action){
            state.isAuthenticated = true,
            state.userDetails = action.payload
        },

        signup(state, action){
            state.isAuthenticated = true,
            state.userDetails = action.payload
        },

        logout(state){
            state.isAuthenticated = false;
            state.userDetails = []
        }
    }
});

export const authActions = authSlice.actions
export default authSlice.reducer