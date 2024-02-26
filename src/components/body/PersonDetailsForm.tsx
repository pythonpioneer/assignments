import { Grid, TextField, Button, MenuItem, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";

interface FormData {
    name: string;
    age: number;
    mobile: string;
    sex: ("male" | "female");
    idType: ("aadhar" | "pan");
    idNumber: string;
}

// to display the form to enter personal details
const PersonDetailsForm: React.FC = () => {

    const { register, handleSubmit } = useForm<FormData>();

    // now submit the form and send the data into tables
    const submitForm: SubmitHandler<FormData> = (data) => {
        console.log("data: ", data);
    }

    return (
        <Grid sx={{ margin: '2%' }}>
            <Typography variant="h5" sx={{ margin: '5px', marginLeft: '0px', textDecoration: 'underline' }}>Personal Details</Typography>
            <form onSubmit={handleSubmit(submitForm)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            {...register("name")}
                            label="Name"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            {...register("age")}
                            label="Age"
                            type="number"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            {...register("mobile")}
                            label="Mobile"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            {...register("sex")}
                            label="Sex"
                            select
                            variant="outlined"
                            fullWidth
                            defaultValue={"male"}
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            {...register("idType")}
                            label="ID Type"
                            select
                            variant="outlined"
                            fullWidth
                            defaultValue={"aadhar"}
                        >
                            <MenuItem value="aadhar">Aadhar</MenuItem>
                            <MenuItem value="pan">PAN</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            {...register("idNumber")}
                            label="ID Number"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ float: 'right'}}
                        >
                            Submit and Next
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    );
};

export default PersonDetailsForm;
