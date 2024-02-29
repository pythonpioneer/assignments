import { createSlice, PayloadAction } from '@reduxjs/toolkit';


// initial state type of the user data
interface FormData {

    // user personal data
    name: string | null;
    age: number | null;
    mobile: string | null;
    sex: "male" | "female" | null;
    idType: "aadhar" | "pan" | null;
    idNumber: string | null;

    // user address data
    address?: string;
    state?: string;
    city?: string;
    country?: string;
    pinCode?: number | null;
}

// initial state of the user
const userInitialState: FormData = {
    
    // personal data of user
    name: null,
    age: null,
    mobile: null,
    sex: null,
    idType: null,
    idNumber: null,

    // user address data
    address: '',
    state: '',
    city: '',
    country: '',
    pinCode: null,
}

// now, create the action and reducer using slice
const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {

        // here we will set the personal data of the user
        setUserPersonalData: (state, action: PayloadAction<FormData>) => {
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.mobile = action.payload.mobile;
            state.sex = action.payload.sex;
            state.idType = action.payload.idType;
            state.idNumber = action.payload.idNumber;
        },

        // here we will set the address of the user
        serUserAddress: (state, action: PayloadAction<FormData>) => {
            state.address = action.payload.address;
            state.state = action.payload.state;
            state.city = action.payload.city;
            state.country = action.payload.country;
            state.pinCode = action.payload.pinCode;
        }
    },
});

// now export all the action and reducers
export const { } = userSlice.actions;
export default userSlice.reducer;