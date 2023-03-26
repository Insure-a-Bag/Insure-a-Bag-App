import { Box, Button, Container, Modal, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { theme } from "./theme"
import { PolicyNFTCardInterface } from "../../utils/interfaces"
import Image from "next/image"
import useMintPolicy from "./useMintPolicy"
import usePayPremium from "./usePayPremium"
import useMintPolicyApe from "./useMintPolicyApe"
import useRenew from "./useRenewPolicy"
import useRenewPolicyApe from "./useRenewPolicyApe"

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

export default function PolicyClaimButton(props: PolicyNFTCardInterface) {
	const [open, setOpen] = useState<boolean>(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	// Starts here
	// const { writeContract } = useMintPolicy()
	// const { writeContract} = usePayPremium()
	// const {writeContract} = useRenew()
	// const {writeContract} = useMintPolicyApe()
	// const {writeContract} = useRenewPolicyApe()
	return (
		<>
			<Button
				sx={{
					backgroundColor: "#ff7f50",
					p: "0.5rem",
					mr: "2rem",
					color: "#FAFFFF",
					borderRadius: 2,
					"&:hover": {
						bgcolor: "#ff7f50"
					}
				}}
				onClick={handleOpen}
			>
				Apply for Claim
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Box>
						<Typography variant="h4" component="h2" color="#FAFFFF">
							Policy ID: {props.policyId}
						</Typography>
						<Typography variant="h5" sx={{ mt: 2 }} color="#FAFFFF">
							Insurer:{" "}
							{props.address.length > 20
								? props.address.slice(0, 7) +
								  "..." +
								  props.address.slice(-7, -1)
								: props.address}
						</Typography>
						<Typography variant="h5" sx={{ mt: 2 }} color="#FAFFFF">
							Expiry Date: {props.expiryDate}
						</Typography>
						<Typography variant="h5" sx={{ mt: 2 }} color="#FAFFFF">
							Premium Amount: {props.premiumAmount}
						</Typography>
						<Button
							sx={{
								backgroundColor: "#ff7f50",
								p: "0.5rem",
								color: "#FAFFFF",
								borderRadius: 2,
								mt: "2rem",
								"&:hover": {
									bgcolor: "#ff7f50"
								}
							}}
							// onClick={}
						>
							Claim
						</Button>
					</Box>
				</Box>
			</Modal>
		</>
	)
}
