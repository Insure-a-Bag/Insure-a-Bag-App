import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import mission from '../images/mission.png'
import vision from '../images/vision.png'
import future from '../images/future.png'

const Mission = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: "100px", mb: "100px" }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8} text-items='left'>
            <Typography color="black" variant="h3" className='grid-elements' sx={{ ml: "200px"}}>
                <strong>Mission Statement</strong>
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
                width={200}
                height={150}
                style={{ float: "right", marginRight: "25px", marginTop: "25px" }}
            />
        </Grid>
        <Grid item xs={6} md={8}>
            <Typography color="black" variant="h3" className='grid-elements' sx={{ float: "right", mr: "200px" }}>
                <strong>The Vision</strong>
            </Typography>
            <Typography color="black" variant="body1" sx={{ mr: "200px", float: "right"}}>
                Our vision is for the NFT insurance industry to be a trusted and integral part of the NFT ecosystem, 
                providing peace of mind and security to NFT owners and collectors alike. We imagine an industry where insurance coverage for NFTs 
                is standard and widely recognized, with a range of policies tailored to the needs of different types of NFTs and their owners. 
                We envision a future where NFT insurance providers work closely with NFT marketplaces and platforms, to ensure seamless and efficient coverage 
                for all transactions. We believe that NFT insurance will play a crucial role in the continued growth and development of the NFT market, 
                and we are committed to being at the forefront of this exciting new industry.
            </Typography>
        </Grid>
        <Grid item xs={6} md={8} text-items='left'>
            <Typography color="black" variant="h3" className='grid-elements' sx={{ ml: "200px"}}>
                <strong>The Future</strong>
            </Typography>
            <Typography color="black" variant="body1" sx={{ ml: "200px"}}>
                The future of Web 3 is incredibly exciting, with endless possibilities for decentralization and innovation. 
                One of the most interesting developments is the rise of NFTs and the potential for NFT insurance. 
                NFTs have exploded in popularity as a new way to prove ownership and authenticity of digital assets, and as more valuable 
                assets are being tokenized, the need for insurance to protect against loss or theft will become increasingly important. 
                As Web 3 continues to evolve, we can expect to see groundbreaking developments in the world of decentralized finance, digital identity, and more.            
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