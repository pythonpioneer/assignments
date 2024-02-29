import React from "react";
import { Paper } from "@mui/material";
import Index from ".";


// giving some style and structure to the index component
const Page: React.FC = () => {
    return (
        <>
            <div
                style={{
                    backgroundColor: "#efefef",
                    padding: "100px 200px",
                }}
            >
                <Paper square={false} elevation={8}>
                    <Index />
                </Paper>
            </div>
        </>
    );
};

export default Page;
