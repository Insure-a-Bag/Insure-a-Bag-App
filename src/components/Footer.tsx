// import React from 'react';
// import { makeStyles } from '@mui/styles';
// import { BottomNavigation, BottomNavigationAction, Typography, Grid } from '@mui/material';

// const useStyles = makeStyles({
//   root: {
//     backgroundColor: "#0D1A2D",
//     color: "#FAFFFF",
//     height: '80px',
//     padding: '0 20px',
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//   },
//   link: {
//     margin: '0 10px',
//   }
// });

// function Footer() {
//   const classes = useStyles();

//   return (
//     <BottomNavigation className={classes.root}>
//       <Grid container spacing={2} alignItems="center">
//         <Grid item xs={4}>
//           <Typography variant="body1">INSURE-A-BAG</Typography>
//         </Grid>
//         <Grid item xs={4} container justifyContent="center">
//           <BottomNavigationAction
//             sx={{ bgcolor: "#ff7f50" }}
//             className={classes.link}
//             label="Home"
//             value="home"
//             href="/"
//           />
//           <BottomNavigationAction
//             sx={{ bgcolor: "#ff7f50" }}
//             className={classes.link}
//             label="MyNFTs"
//             value="nfts"
//             href="/myNFT"
//           />
//           <BottomNavigationAction
//             sx={{ bgcolor: "#ff7f50" }}
//             className={classes.link}
//             label="MyPolicies"
//             value="policies"
//             href="/myPolicy"
//           />
//         </Grid>
//         <Grid item xs={4} container justifyContent="flex-end">
//           <Typography variant="body2">&copy; {new Date().getFullYear()} INSURE-A-BAG. All rights reserved.</Typography>
//         </Grid>
//       </Grid>
//     </BottomNavigation>
//   );
// }

// export default Footer;

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
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h6" color="#FAFFFF" sx={{ marginX: "2rem" }}>
                <Link href="/">Home</Link>
              </Typography>
              <Typography variant="h6" color="#FAFFFF" sx={{ marginX: "2rem" }}>
                <Link href="/myNFT">My NFTs</Link>
              </Typography>
              <Typography variant="h6" color="#FAFFFF" sx={{ marginX: "2rem" }}>
                <Link href="/myPolicy">Your Policies</Link>
              </Typography>
            </Box>
            <Typography variant="subtitle1" color="#FAFFFF">
                © 2023 All rights reserved
            </Typography>
          </StyledToolbar>
        </AppBar>
      </Box>
    );
  }
  
  
  