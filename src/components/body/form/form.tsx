import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Grid, TextField, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useDispatch } from 'react-redux';
import { setUserPersonalData, setUserAddress } from '../../../features/user/userSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import { personalDetailSchema } from "../../../schema";


const Form: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(personalDetailSchema),
    });
    const dispatch = useDispatch();

    const submitForm = (data: any) => {
        // Dispatch actions to update user state in Redux store
        // dispatch(setUserPersonalData(data));
        // dispatch(setUserAddress(data));
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <Grid>
                <Typography px={4} pt={2} sx={{ fontSize: "24px", color: "#007FFF" }}>
                    Details
                </Typography>
            </Grid>

            <Grid container m={4} rowGap={2}>
                <Grid item xs={12} sm={6}>
                    <TextField label="First Name" variant="standard" required {...register('name')} />
                    <Typography color="error" variant="body2">{errors.name?.message}</Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField label="Age" variant="standard" required {...register('age')} />
                    <Typography color="error" variant="body2">{errors.age?.message}</Typography>
                </Grid>
            </Grid>

            <Grid container m={4} rowGap={2}>
                <Grid item xs={12} sm={6}>
                    <FormControl>
                        <FormLabel required>Sex</FormLabel>
                        <RadioGroup row {...register('sex')} name="sex">
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField label="Mobile Number" variant="standard" inputMode="numeric" required />
                    {/* <Typography color="error" variant="body2">{errors.mobile?.message}</Typography> */}
                </Grid>
            </Grid>

            <Grid container m={4} rowGap={2}>
                <Grid item xs={12} sm={6}>
                    <FormControl>
                        <FormLabel required>Govt Issued ID Type</FormLabel>
                        <RadioGroup row {...register('idType')} defaultValue="aadhar">
                            <FormControlLabel value="aadhar" control={<Radio />} label="Aadhar" />
                            <FormControlLabel value="pan" control={<Radio />} label="PAN" />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField label="Govt Issued ID" variant="standard" required {...register('idNumber')} />
                    <Typography color="error" variant="body2">{errors.idNumber?.message}</Typography>
                </Grid>
            </Grid>

            <Grid item xs={12} display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"} pl={2} pt={3}>
                <Button
                    type="reset"
                    sx={{
                        padding: "6px 24px",
                        backgroundColor: "#efefef",
                        color: "#8c8c8c",
                        borderRadius: "25px",
                        fontSize: "16px",
                        fontWeight: "500",
                        "&:hover": {
                            backgroundColor: "#dbdbdb",
                        },
                    }}
                >
                    Reset
                </Button>
                <Button
                    type="submit"
                    sx={{
                        padding: "6px 24px",
                        backgroundColor: "#52a5e5",
                        borderRadius: "25px",
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "white",
                        "&:hover": {
                            backgroundColor: "#3979AB",
                        },
                    }}
                >
                    Submit and Next
                </Button>
            </Grid>
        </form>
    );
};

export default Form;
