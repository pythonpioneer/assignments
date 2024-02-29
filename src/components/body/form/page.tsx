import React from "react";
import { Paper, Box } from "@mui/material";
import Index from ".";


// giving some style and structure to the index component
const Page: React.FC = () => {
    return (
        <Box
        sx={{
          padding: {
            xs: "16px 12px",
            sm: "60px 16px",
            md: "100px 70px",
            lg: "100px 200px",
          },
        }}
      >
        <Paper square={false} elevation={8} sx={{ maxWidth: "1000px" }}>
          <Index />
        </Paper>
      </Box>
    );
};

export default Page;
