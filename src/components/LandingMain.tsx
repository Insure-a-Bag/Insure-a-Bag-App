import { Box, Button, Container, Typography } from "@mui/material"
import { theme } from "./theme"

export default function LandingMain() {
	return (
		<Box
			component="h1"
			sx={{ backgroundColor: "white", display: "block", height: "50rem" }}
		>
			<Container sx={{ p: "15rem" }}>
				<Typography align="center" variant="h1" color="black">
					Insure your NFTs with Insure-A-Bag
				</Typography>
				<Typography color="black" align="center" variant="h3" mt="3rem">
					Add insurance to your policy
				</Typography>
				<Container sx={{textAlign:"center", mt:"3rem"}}>
					<Button sx={{backgroundColor:theme.palette.success.main, p:"1.5rem", borderRadius:5, fontWeight:500}}>
						<Typography color="black" variant="h5">
							Click to Insure
						</Typography>
					</Button>
				</Container>
			</Container>
		</Box>
	)
}
