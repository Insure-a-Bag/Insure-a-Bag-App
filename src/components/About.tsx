import React from 'react';
import {
  Typography,
  Box,
  Grid,
  Avatar,
  styled,
} from '@mui/material';

const RootBox = styled(Box)({
  flexGrow: 1,
  padding: '2rem',
  backgroundColor: "#FAFFFF",
});

const TitleTypography = styled(Typography)({
  marginBottom: '1rem',
});

const AvatarImage = styled(Avatar)(({theme}) => ({
  width: theme.spacing(15),
  height: theme.spacing(15),
  margin: '0 auto',
}));

const team = [
  {
    name: 'Andrej Babamov',
    role: 'Software Developer',
    image: "https://avatars.githubusercontent.com/u/112558576?v=4",
  },
  {
    name: 'Nightfall',
    role: 'Software Developer',
    image: "https://avatars.githubusercontent.com/u/68776551?v=4",
  },
  {
    name: 'Luke Dasios',
    role: 'Software Developer',
    image: "https://avatars.githubusercontent.com/u/64623750?v=4",
  },
  {
    name: 'Lucas Costier',
    role: 'Software Developer',
    image: "https://avatars.githubusercontent.com/u/44002091?v=4",
  },
  {
    name: 'Todor Srbinovski',
    role: 'Product Manager',
    image: "https://avatars.githubusercontent.com/u/126675443?v=4",
  },
];

export default function About() {
    return (
      <RootBox sx={{pt: "200px", color:"black"}}>
        <TitleTypography variant="h4" align="center">
          The Team
        </TitleTypography>
        <Box sx={{ display: 'flex', ml: "200px" }}>
          <Grid container spacing={2}>
            {team.map((member: any, index: any) => (
              <Grid item xs={12} sm={2} key={index}>
                <AvatarImage
                  alt={member.name}
                  src={member.image}
                />
                <Typography variant="h6" align="center">
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" align="center">
                  {member.role}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{pt: "50px", textAlign: 'center'}}>
          <Typography variant="body1">
            Our development team comprises highly skilled and experienced professionals who are passionate about using technology to solve real-world problems. With years of experience in software development and product management, our team brings a wealth of knowledge and expertise to the Web3 space.
            We are committed to staying at the forefront of emerging technologies and are constantly seeking new ways to push the boundaries of what is possible.
            One of the key challenges we have identified in the Web3 space is the issue of NFT theft. As the popularity of NFTs continues to grow, so too does the risk of theft and fraud. We believe that this is a critical problem that needs to be addressed, and we are dedicated to creating solutions that can help mitigate this risk.
            At the core of our approach is a deep understanding of the needs and challenges of our customers. We work closely with nft collectors to gain insights into their specific pain points and requirements, and we use this knowledge to develop tailored solutions that meet their unique needs.
            Our teams technical expertise spans a wide range of technologies, including blockchain, smart contracts, decentralized applications (dApps), and prerequisite Web2 knowledge. We pride ourselves on our ability to stay up-to-date with the latest developments in these areas and to apply this knowledge to our projects.
            In addition to our technical skills, our team is known for our collaborative approach and commitment to teamwork. We believe that the best solutions are developed through open communication and teamwork, and we strive to foster a culture of collaboration and innovation in everything we do.
            </Typography>
        </Box>
      </RootBox>
    );
  }
  