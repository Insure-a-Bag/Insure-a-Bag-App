import { SafetyCheck } from "@mui/icons-material"
import {
	AppBar,
	Box,
	Container,
	// Link,
	Toolbar,
	Typography,
	styled,
} from "@mui/material"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import Link from "next/link"
import { theme } from "./theme"

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
					// height:"5rem"
					p: "1rem",
				}}
			>
				<StyledToolbar>
					<Box display="flex">
						<SafetyCheck
							sx={{ marginRight: "1.5rem", color: "black", fontSize: 40 }}
						/>
						<Typography variant="h6" color="black">
							INSURE-A-BAG
						</Typography>
					</Box>
					<Box sx={{ display: "flex" }}>
						<Typography variant="h6" color="black" sx={{ marginX: "2rem" }}>
							<Link href="/">Home</Link>
						</Typography>
						<Typography variant="h6" color="black" sx={{ marginX: "2rem" }}>
							<Link href="/">My NFTs</Link>
						</Typography>
						<Typography variant="h6" color="black" sx={{ marginX: "2rem" }}>
							<Link href="/myPolicy">Your Policies</Link>
						</Typography>
					</Box>
					<ConnectButton />
				</StyledToolbar>
			</AppBar>
		</Box>
	)
}
