import { Box, Button, Container, Modal, Typography } from "@mui/material"
import { useState } from "react"
import { theme } from "./theme"
import { PolicyNFTCardInterface } from "../../utils/interfaces"
import Image from "next/image"
import getMerkle from "../../utils/getMerkle"
import usePayPremium from "./usePayPremium"
import useRenew from "./useRenewPolicy"
import { useAccount } from "wagmi"

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "30rem",
	bgcolor: "#0D1A2D",
	borderRadius: 5,
	boxShadow: 24,
	p: 4,
}

export default function PolicyDetailsButton(props: PolicyNFTCardInterface) {
	const [open, setOpen] = useState<boolean>(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	const { isConnected } = useAccount()
	const { writeContract } = useRenew({
		nftAddress: props.address,
		nftTokenId: props.tokenId,
		policyId: props.policyId,
		days: 30,
	})
	return (
		<>
			<Button
				sx={{
					backgroundColor: "#ff7f50",
					p: "0.5rem",
					color: "#FAFFFF",
					borderRadius: 2,
					"&:hover": {
						bgcolor: "#ff7f50",
					},
				}}
				onClick={handleOpen}
			>
				See Details
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography
						variant="h4"
						component="h2"
						color="#FAFFFF"
						sx={{ textAlign: "center" }}
					>
						Policy ID: {props.policyId}
					</Typography>
					<Container
						sx={{
							position: "relative",
							width: "20rem",
							height: "20rem",
							my: "2rem",
						}}
					>
						<Image
							src={props.imagePath}
							style={{ borderRadius: 10 }}
							fill
							alt="Image of NFT insured"
						/>
					</Container>
					<Box>
						<Typography variant="h5" sx={{ mt: 2 }} color="#FAFFFF">
							Insurer:{" "}
							{props.address.length > 20
								? props.address.slice(0, 7) +
								  "..." +
								  props.address.slice(-7, -1)
								: props.address}
						</Typography>
						<Typography variant="h5" sx={{ mt: 2 }} color="#FAFFFF">
							Policy Address:{" "}
							{props.policyAddress.length > 20
								? props.policyAddress.slice(0, 7) +
								  "..." +
								  props.policyAddress.slice(-7, -1)
								: props.policyAddress}
						</Typography>
						<Typography variant="h5" sx={{ mt: 2 }} color="#FAFFFF">
							Expiry Date: {props.expiryDate}
						</Typography>
						<Typography variant="h5" sx={{ mt: 2 }} color="#FAFFFF">
							Premium Amount: {props.premiumAmount} ETH
						</Typography>
						{isConnected ? (
							<Button
								sx={{
									backgroundColor: "#ff7f50",
									p: "0.5rem",
									color: "#FAFFFF",
									borderRadius: 2,
									mt: "2rem",
								}}
								onClick={writeContract}
							>
								Pay Premium
							</Button>
						) : (
							<Button
								sx={{
									backgroundColor: "#ff7f50",
									p: "0.5rem",
									color: "#FAFFFF",
									borderRadius: 2,
									mt: "2rem",
								}}
								
							>
								Pay Premium
							</Button>
						)}
					</Box>
				</Box>
			</Modal>
		</>
	)
}
