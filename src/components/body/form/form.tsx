import {
    Button,
    Grid,
    TextField,
    Typography,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
} from "@mui/material";
import React from "react";

// returning the form components
const Form: React.FC = () => {
    return (
        <>
            <Grid>
                <Typography
                    px={4}
                    pt={2}
                    sx={{ fontSize: "24px", color: "#007FFF" }}
                >
                    Details
                </Typography>
            </Grid>

            <Grid container m={4} rowGap={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="First Name"
                        variant="standard"
                        required={true}
                        // defaultValue="Name"
                    ></TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Age"
                        variant="standard"
                        required={true}
                        // defaultValue="Name"
                    ></TextField>
                </Grid>
            </Grid>

            <Grid container m={4} rowGap={2}>
                <Grid item xs={12} sm={6}>
                    <FormControl>
                        <FormLabel required={true}>Sex</FormLabel>
                        <RadioGroup row name="gender-radio">
                            <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label="Female"
                            />
                            <FormControlLabel
                                value="male"
                                control={<Radio />}
                                label="Male"
                            />
                            {/* <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              /> */}
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Mobile Number"
                        variant="standard"
                        inputMode="numeric"
                        required={true}
                        // defaultValue="Name"
                    ></TextField>
                </Grid>
            </Grid>

            <Grid container m={4} rowGap={2}>
                <Grid item xs={12} sm={6}>
                    <FormControl>
                        <FormLabel required={true}>
                            Govt Issued ID Type
                        </FormLabel>
                        <RadioGroup defaultValue="aadhar" row>
                            <FormControlLabel
                                value="aadhar"
                                control={<Radio />}
                                label="Aadhar"
                            ></FormControlLabel>
                            <FormControlLabel
                                value="pan"
                                control={<Radio />}
                                label="PAN"
                            ></FormControlLabel>
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Govt Issued ID"
                        variant="standard"
                        required={true}
                    ></TextField>
                </Grid>
            </Grid>

            <Grid
                container
                xs={12}
                display={"flex"}
                justifyContent={"space-between"}
                flexWrap={"wrap"}
                pl={2}
                pt={3}
            >
                <Button
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
                    Submit
                </Button>
            </Grid>
        </>
    );
};

export default Form;
