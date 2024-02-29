// importing all requirements to setup the store
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';


// now create the store
const store = configureStore({
    reducer: userReducer,
});

// now export the store
export default store;