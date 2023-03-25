import { Box, Button, Container, Modal, Typography } from "@mui/material"
import { useState } from "react"
import { theme } from "./theme"
import { PolicyNFTCardInterface } from "../../utils/interfaces"
import Image from "next/image"
import getMerkle from "../../utils/getMerkle"

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "30rem",
	bgcolor: "background.paper",
	borderRadius: 5,
	boxShadow: 24,
	p: 4,
}

export default function PolicyDetailsButton(props: PolicyNFTCardInterface) {
	const [open, setOpen] = useState<boolean>(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	return (
		<>
			<Button
				sx={{
					backgroundColor: theme.palette.secondary.main,
					p: "0.5rem",
					color: "black",
					borderRadius: 2,
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
					<Typography variant="h4" component="h2" color="black">
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
						<Image src={props.imagePath} style={{borderRadius:10}} fill alt="Image of NFT insured" />
					</Container>
					<Box>
						<Typography variant="h5" sx={{ mt: 2 }} color="black">
							Insurer:{" "}
							{props.address.length > 20
								? props.address.slice(0, 7) +
								  "..." +
								  props.address.slice(-7, -1)
								: props.address}
						</Typography>
						<Typography variant="h5" sx={{ mt: 2 }} color="black">
							Policy Address:{" "}
							{props.policyAddress.length > 20
								? props.policyAddress.slice(0, 7) +
								  "..." +
								  props.policyAddress.slice(-7, -1)
								: props.policyAddress}
						</Typography>
						<Typography variant="h5" sx={{ mt: 2 }} color="black">
							Expiry Date: {props.expiryDate}
						</Typography>
						<Typography variant="h5" sx={{ mt: 2 }} color="black">
							Premium Amount: {props.premiumAmount} ETH
						</Typography>
						<Button
							sx={{
								backgroundColor: theme.palette.secondary.main,
								p: "0.5rem",
								color: "black",
								borderRadius: 2,
								mt: "2rem",
							}}
							onClick={getMerkle}
						>
							Pay Premium
						</Button>
					</Box>
				</Box>
			</Modal>
		</>
	)
}
