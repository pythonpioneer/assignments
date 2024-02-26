import React from "react";
import { Typography, Grid } from "@mui/material";
import SunIcon from "../icons/SunIcon";


// to render the header of the app
export const Header: React.FC<{}> = () => {
    return (
        <>
            <Grid sx={{ display: "flex", justifyContent: "space-between", backgroundColor: "#e3d6c1" }}>
                <Typography
                    sx={{
                        paddingLeft: "2%",
                        paddingY: "10px",
						fontFamily: "Lucida-sans",
                    }}
                    variant="h4"
                >
                    User Info
                </Typography>
                <SunIcon onClick={() => {}} style={{ fontSize: '2rem', marginTop: '15px', marginRight: '2%', color: '#906218' }}/>
            </Grid>
        </>
    );
};
