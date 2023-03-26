import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	styled,
} from "@mui/material"
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from "next/link"
import { theme } from "./theme"
import Image from "next/image";

const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
})

export default function Navbar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				sx={{
					backgroundColor: theme.palette.primary.main,
					p: "0.1rem"
				}}
			>
				<StyledToolbar>
					<Box display="flex">
						{/* <Typography variant="h6" color="#FAFFFF">
							INSURE-A-BAG
						</Typography> */}
						<Image src="NFT_Insurance_2.svg" width="200" height="150" alt="Logo"/>
					</Box>
					<Box sx={{ display: "flex", flex: 1, justifyContent: "center", ml: "230px" }}>
						<Typography variant="h6" color="#FAFFFF" sx={{ marginX: "2rem" }}>
							<Link href="/">Home</Link>
						</Typography>
						<Typography variant="h6" color="#FAFFFF" sx={{ marginX: "2rem" }}>
							<Link href="/nft">NFTs</Link>
						</Typography>
						<Typography variant="h6" color="#FAFFFF" sx={{ marginX: "2rem" }}>
							<Link href="/policy">Policies</Link>
						</Typography>
					</Box>
					<ConnectButton />
				</StyledToolbar>
			</AppBar>
		</Box>
	)
}
