import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material'

const Mission = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: "300px", mb: "300px", bgcolor: "purple" }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8} text-items='left'>
            <Typography color="black" variant="h3" className='grid-elements' sx={{bgcolor: "red", ml: "200px"}}>
                Our Mission
            </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
            <Typography color="black" variant="h3" className='grid-elements' sx={{bgcolor: "yellow", mb: "300px"}}>
                Some picture goes here
            </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
            <Typography color="black" variant="h3" className='grid-elements' sx={{bgcolor: "orange", mb: "300px"}}>
                Some picture goes here
            </Typography>
        </Grid>
        <Grid item xs={6} md={8}>
            <Typography color="black" variant="h3" className='grid-elements' sx={{ bgcolor: "green", float: "right", mr: "200px"}}>
                Our Vision
            </Typography>
        </Grid>
        <Grid item xs={6} md={8}>
            <Typography color="black" variant="h3" className='grid-elements' sx={{ bgcolor: "blue", ml: "200px"}}>
                About Us
            </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
            <Typography color="black" variant="h3" className='grid-elements' sx={{bgcolor: "grey", mb: "300px"}}>
                Some picture goes here
            </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Mission