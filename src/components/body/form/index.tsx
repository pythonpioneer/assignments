import { Grid } from "@mui/material";
import React from "react";
import Sidegrid from "./sidegrid";
import Form from "./form";

// to render the form structure and the left color grid
const Index: React.FC = () => {
    return (
        <>
            <Grid container display={"flex"}>
                <Grid item xs={2} sm={3}>
                    <Sidegrid />
                </Grid>

                <Grid item px={4} py={3} xs={8}>
                    <Form />
                </Grid>
            </Grid>
        </>
    );
};

export default Index;
