import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    styled,
  } from "@mui/material";
  import Link from "next/link";
  import { theme } from "./theme";
  
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  });
  
  
  const FooterContainer = styled("footer")({
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.palette.primary.main,
    color: "#FAFFFF",
    p: "1rem",
  });
  
  export default function Navbar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: theme.palette.primary.main,
            p: "1rem",
          }}
        >
          <StyledToolbar>
            <Box display="flex">
              <Typography variant="h6" color="#FAFFFF">
                INSURE-A-BAG
              </Typography>
            </Box>
            <Typography variant="subtitle1" color="#FAFFFF">
                © 2023, All rights reserved
            </Typography>
          </StyledToolbar>
        </AppBar>
      </Box>
    );
  }
  
  
  