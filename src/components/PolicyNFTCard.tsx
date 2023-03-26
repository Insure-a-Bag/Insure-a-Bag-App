import { SafetyCheck } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import Image from "next/image"
import { PolicyNFTCardInterface } from "../../utils/interfaces"
import PolicyDetailsButton from "./PolicyDetailsButton"
import PolicyClaimButton from "./PolicyClaimButton"
import { useAccount } from "wagmi"

import { useState } from "react"

export default function PolicyNFTCard(props: PolicyNFTCardInterface) {
	const { address } = useAccount()
	const expiryDate: string = props.expiryDate
	let imageUrl="https://alchemy.mypinata.cloud/ipfs/Qmchi3Gj5ta4cwcEWXD5aj1c6xNGLNmvVxt4gfuxGR3QKt"
	if (address) {
		if (
			props.address.toLowerCase() ===
			"0x8DdC4D5F7f8e886960DC153d6297A6dafC534181".toLowerCase()
		) {
			imageUrl =
				"https://alchemy.mypinata.cloud/ipfs/Qmchi3Gj5ta4cwcEWXD5aj1c6xNGLNmvVxt4gfuxGR3QKt"
			
		} else if (
			props.address.toLowerCase() ===
			"0xbf3295bd6603779043f78b287a6a97bc6139f0f8".toLowerCase()
		) {
			imageUrl =
				"https://alchemy.mypinata.cloud/ipfs/Qmd82GtPGa4G3NCgVUWBTyrtD9MVcs8PNgT4EXNQVXKkZ8"
			
		} else if (
			props.address.toLowerCase() ===
			"0x85faf3b4b37ba48cd50eb03e38b6ebbd4384c3c7".toLowerCase()
		) {
			imageUrl =
				"https://alchemy.mypinata.cloud/ipfs/QmdUhG52R1qfpXimqV78yX1f7AcoikKaktU2xu6cUqsXeL"
			
		}
	}
	
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
				color: "#FAFFFF",
			}}
		>
			<Typography variant="h4" sx={{ textAlign: "center" }}>
				Policy ID: {props.policyId}
			</Typography>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat(2,1fr)",
					my: "2rem",
				}}
			>
				<Box
					sx={{
						position: "relative",
						width: "18rem",
						height: "10rem",
						alignItems: "center",
						ml: "20px",
						border: "2px solid #ff7f50",
					}}
				>
					<Image src={imageUrl} fill alt="Image of NFT insured" />
				</Box>
			</Box>
			<Typography variant="h6" my="1rem">
				Insurer:{" "}
				{address
					? address.length > 11
						? address.slice(0, 7) + "..." + address.slice(-7, -1)
						: address
					: null}
			</Typography>
			<Typography variant="h6" my="1rem">
				Expiry Date: {expiryDate}
			</Typography>
			<PolicyClaimButton
				policyId={props.policyId}
				expiryDate={props.expiryDate}
				imagePath={imageUrl}
				address={props.address}
				premiumAmount={props.premiumAmount}
				policyAddress={props.policyAddress}
				tokenId={props.tokenId}
			/>
			<PolicyDetailsButton
				policyId={props.policyId}
				expiryDate={props.expiryDate}
				imagePath={imageUrl}
				address={props.address}
				premiumAmount={props.premiumAmount}
				policyAddress={props.policyAddress}
				tokenId={props.tokenId}
			/>
		</Box>
	)
}
