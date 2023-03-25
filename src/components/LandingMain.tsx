import { Box, Button, Container, Typography, Link } from "@mui/material";
import { theme } from "./theme";

export default function LandingMain() {
  return (
    <Box
      component="h1"
      sx={{ backgroundColor: "white", display: "block", height: "50rem" }}
    >
      <Container sx={{ p: "15rem" }}>
        <Typography align="center" variant="h1" color="black">
          INSURE-A-BAG
        </Typography>
        <Typography color="black" align="center" variant="h3" mt="3rem">
          Secure Your NFTs
        </Typography>
        <Container sx={{ textAlign: "center", mt: "3rem" }}>
          <Button
            sx={{
              backgroundColor: theme.palette.success.main,
              p: "1.5rem",
              borderRadius: 5,
              fontWeight: 500,
			  '&:hover': {
				backgroundColor: theme.palette.success.main,
				boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)'
			  },
			  '&:active': {
				backgroundColor: theme.palette.success.main,
			  }
            }}
          >
            <Typography color="black" variant="h5">
              <Link href="/nft" sx={{ textDecoration: 'none' }}>Insure Now</Link>
            </Typography>
          </Button>
        </Container>
      </Container>
    </Box>
  );
}
