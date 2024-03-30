import { configureStore } from "@reduxjs/toolkit";
import authReducer  from './authSlice'
import apartmentReducer from './apartmentSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        apartment: apartmentReducer
    }
})

export default store;