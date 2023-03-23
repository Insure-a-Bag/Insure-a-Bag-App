import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material'

const Mission = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: "300px", mb: "300px", bgcolor: "purple" }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8} text-items='left'>
            <Typography color="black" variant="h3" className='grid-elements' sx={{bgcolor: "red", ml: "200px", mb: "30px"}}>
                Our Mission
            </Typography>
            <Typography color="black" variant="body1" sx={{ ml: "200px"}}>
                Our mission at Insure-a-Bag is to provide reliable and comprehensive insurance coverage for Non-Fungible Tokens (NFTs). 
                We understand that NFTs represent valuable and unique digital assets, and our goal is to protect our clients from 
                financial loss due to theft, hacking, or other unforeseen circumstances. 
                We are committed to offering customized insurance solutions that meet the specific needs of NFT owners and collectors, with transparent and fair pricing. 
                Our organization is dedicated to promoting trust and confidence in the rapidly growing NFT market, and we aim to be the go-to insurance provider for all NFT-related risks.
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
            <Typography color="black" variant="body1" sx={{ mr: "200px", float: "right",}}>
                Our vision is for the NFT insurance industry to be a trusted and integral part of the NFT ecosystem, 
                providing peace of mind and security to all NFT owners and collectors. We imagine an industry where insurance coverage for NFTs 
                is standard and widely recognized, with a range of policies tailored to the needs of different types of NFTs and their owners. 
                We envision a future where NFT insurance providers work closely with NFT marketplaces and platforms, to ensure seamless and efficient coverage 
                for all transactions. We believe that NFT insurance will play a crucial role in the continued growth and development of the NFT market, 
                and we are committed to being at the forefront of this exciting new industry.
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