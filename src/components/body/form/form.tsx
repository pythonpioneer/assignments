import { Button, Grid, TextField, Typography } from "@mui/material";
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
                        // defaultValue="Name"
                    ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="First Name"
                        variant="standard"
                        // defaultValue="Name"
                    ></TextField>
                </Grid>
            </Grid>

            <Grid container m={4} rowGap={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="First Name"
                        variant="standard"
                        // defaultValue="Name"
                    ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="First Name"
                        variant="standard"
                        // defaultValue="Name"
                    ></TextField>
                </Grid>
            </Grid>

            <Grid container m={4} rowGap={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="First Name"
                        variant="standard"
                        // defaultValue="Name"
                    ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="First Name"
                        variant="standard"
                        // defaultValue="Name"
                    ></TextField>
                </Grid>
            </Grid>

            <Grid container m={4} rowGap={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="First Name"
                        variant="standard"
                        // defaultValue="Name"
                    ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="First Name"
                        variant="standard"
                        // defaultValue="Name"
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
                        padding: "4px 16px",
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
                        padding: "4px 16px",
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
}

export default Form;