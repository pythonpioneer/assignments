import { createSlice, PayloadAction } from '@reduxjs/toolkit';


// initial state type of the user data
interface FormData {
    name: string | null;
    age: number | null;
    mobile: string | null;
    sex: "male" | "female" | null;
    idType: "aadhar" | "pan" | null;
    idNumber: string | null;
}

// initial state of the user
const userInitialState: FormData = {
    name: null,
    age: null,
    mobile: null,
    sex: null,
    idType: null,
    idNumber: null,
}

// now, create the action and reducer using slice
const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        setName: (state: FormData, action: PayloadAction<string>) => {},
        setAge: (state, action: PayloadAction<number>) => {},
        setMobile: (state, action: PayloadAction<string>) => {},
        setSex: (state, action: PayloadAction<"male" | "female">) => {},
        setIdType: (state, action: PayloadAction<"aadhar" | "pan">) => {},
        setIdNumber: (state, action: PayloadAction<string>) => {},
    },
});

// now export all the action and reducers
export const { } = userSlice.actions;
export default userSlice.reducer;