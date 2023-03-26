import { SafetyCheck } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import Image from "next/image"
import { PolicyNFTCardInterface } from "../../utils/interfaces"
import PolicyDetailsButton from "./PolicyDetailsButton"
import PolicyClaimButton from "./PolicyClaimButton"

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
				backgroundColor: "#0D1A2D",
				color: "#FAFFFF"
			}}
		>
			<Typography variant="h4" sx={{ textAlign: "center" }}>Policy ID: {props.policyId}</Typography>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat(2,1fr)",
					my: "2rem",
				}}
			>
				<Box sx={{ position: "relative", width: "18rem", height: "10rem", alignItems: "center", ml: "20px", border: "2px solid #ff7f50" }}>
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
				Expiry Date: {expiryDate}
			</Typography>
			<PolicyClaimButton
				policyId={props.policyId}
				expiryDate={props.expiryDate}
				imagePath={props.imagePath}
				address={props.address}
				premiumAmount={props.premiumAmount}
				policyAddress={props.policyAddress}
				tokenId={props.tokenId}
			/>
			<PolicyDetailsButton
				policyId={props.policyId}
				expiryDate={props.expiryDate}
				imagePath={props.imagePath}
				address={props.address}
				premiumAmount={props.premiumAmount}
				policyAddress={props.policyAddress}
				tokenId={props.tokenId}
			/>
		</Box>
	)
}
