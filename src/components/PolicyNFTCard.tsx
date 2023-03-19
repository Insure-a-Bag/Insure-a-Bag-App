import { SafetyCheck } from "@mui/icons-material"
import { Box, Button, Container, Typography } from "@mui/material"
import Image from "next/image"
import { theme } from "./theme"
import { PolicyNFTCardInterface } from "../../utils/interfaces"
import PolicyDetailsButton from "./PolicyDetailsButton"
import PolicyClaimButton from "./PolicyClaimButton"
// import {} from "../../public/fanstasyWorldAI1.png"
export default function PolicyNFTCard(props: PolicyNFTCardInterface) {
	const address: string = props.address
	const expiryDate: string = props.expiryDate
	return (
		<Box
			component="div"
			sx={{
				boxShadow: "10",
				width: "25rem",
				height: "30rem",
				p: "2rem",
				borderRadius: 5,
				position: "relative",
				backgroundColor: theme.palette.success.main,
			}}
		>
			<Typography variant="h4">Policy ID: {props.policyId}</Typography>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat(2,1fr)",
					my: "2rem",
				}}
			>
				<SafetyCheck
					sx={{ marginRight: "1.5rem", color: "black", fontSize: 40 }}
				/>
				<Box sx={{ position: "relative", width: "10rem", height: "10rem" }}>
					<Image src={props.imagePath} fill alt="Image of NFT insured" />
				</Box>
			</Box>
			<Typography variant="h6" my="1rem">
				Insurer:{" "}
				{address.length > 11
					? address.slice(0, 7) + "..." + address.slice(-7, -1)
					: address}
			</Typography>
			<Typography variant="h6" my="1rem">
				Expires on- {expiryDate}
			</Typography>
			<PolicyClaimButton
				policyId={props.policyId}
				expiryDate={props.expiryDate}
				imagePath={props.imagePath}
				address={props.address}
				premiumAmount={props.premiumAmount}
				policyAddress={props.policyAddress}
			/>
			<PolicyDetailsButton
				policyId={props.policyId}
				expiryDate={props.expiryDate}
				imagePath={props.imagePath}
				address={props.address}
				premiumAmount={props.premiumAmount}
				policyAddress={props.policyAddress}
			/>
		</Box>
	)
}
