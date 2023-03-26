import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import mission from '../assets/mission.png'
import vision from '../assets/vision.png'
import future from '../assets/future.png'

const Mission = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: "100px", mb: "100px" }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8} text-items='left'>
            <Typography color="white" variant="h3" className='grid-elements' sx={{ ml: "200px" }}>
                <strong>Mission Statement</strong>
            </Typography>
            <Typography color="white" variant="body1" sx={{ ml: "200px"}}>
                Our mission at Insure-a-bag is to empower the digital asset community by providing a decentralized, 
                secure, and user-friendly NFT insurance solution that fosters trust, protection, and growth in the NFT ecosystem. This will 
                enable creators, collectors, and investors to confidently engage with and preserve the value of their digital assets.
            </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
            <Image 
                src={mission}
                alt="mission"
                width={250}
                height={250}
            />
        </Grid>
        <Grid item xs={6} md={4}>
            <Image 
                src={vision}
                alt="vision"
                width={225}
                height={150}
                style={{ float: "right", marginRight: "25px", marginTop: "25px" }}
            />
        </Grid>
        <Grid item xs={6} md={8}>
            <Typography color="white" variant="h3" className='grid-elements' sx={{ float: "right", mr: "200px" }}>
                <strong>The Vision</strong>
            </Typography>
            <Typography color="white" variant="body1" sx={{ mr: "200px", float: "right"}}>
                The vision for Insure-a-bag is to become the leading NFT insurance protocol, shaping the future of digital asset protection and security. 
                We aim to create a thriving, interconnected ecosystem where creators, collectors, and investors can engage with NFTs confidently, knowing their 
                assets are safeguarded by our innovative, decentralized, and comprehensive insurance solutions. Through continuous innovation, seamless integration, 
                and community-driven development, we strive to build a resilient, inclusive, and sustainable platform that fosters growth and long-term success in the 
                digital asset space.
            </Typography>
        </Grid>
        <Grid item xs={6} md={8} text-items='left'>
            <Typography color="white" variant="h3" className='grid-elements' sx={{ ml: "200px"}}>
                <strong>The Future</strong>
            </Typography>
            <Typography color="white" variant="body1" sx={{ ml: "200px"}}>
                In the future, Insure-a-bag envisions transitioning to a Decentralized Autonomous Organization (DAO) to empower our community 
                and enhance platform resilience. Adopting a DAO model will enable decentralized decision-making, where users and stakeholders 
                contribute to protocol upgrades and improvements, ensuring continuous innovation in the NFT insurance space. 
                This transition will facilitate democratic governance, allowing community members to propose, discuss, and vote on key aspects of the protocol. 
                As we evolve, our focus remains on providing a secure, user-friendly, and comprehensive NFT insurance solution that fosters trust and protection within 
                the digital asset ecosystem.        
            </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
            <Image 
                src={future}
                alt="future"
                width={215}
                height={215}
            />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Mission