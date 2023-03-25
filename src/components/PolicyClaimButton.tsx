import { Box, Button, Container, Modal, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { theme } from "./theme"
import { PolicyNFTCardInterface } from "../../utils/interfaces"
import Image from "next/image"
import abi from "../../utils/abi.json"
import {
	useAccount,
	useContractRead,
	useContractWrite,
	usePrepareContractWrite,
	useSigner,
} from "wagmi"
import { parseEther } from "@ethersproject/units"
import { BigNumber } from "alchemy-sdk"

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

export default function PolicyClaimButton(props: PolicyNFTCardInterface) {
	const [open, setOpen] = useState<boolean>(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	// Starts here

	// const { data, isError, isLoading } = useContractRead({
	// 	address: "0xF102146713Ea1244eA8D364Ffe8085DD4068FC2c",
	// 	abi: abi,
	// 	functionName: "balanceOf",
	// 	args: ["0xB721347D2938a5594a12DF5Cc36D598b839Cb98f"],
	// })
	// console.log(data.toString())
	const {data:signer} = useSigner()
	// const { config, error, isError, isFetched } = usePrepareContractWrite({
	// 	address: "0x8632bD6BE0cA0a7D4A5707F8f1Ff32D099bEefd4",
	// 	abi: abi,
	// 	functionName: "mintInsurancePolicy",
	// 	// args: [
	// 	// 	"0x39fe8fc14729fe40bdaffaa9dc3eca2537c782c1",
	// 	// 	1,
	// 	// 	["0x27b5da64d6aa1a1386a4c2bc890823fa4da72a7c4f8dde38bb5f7e0c67362ea2","0x4e7da0d2b8eef6f7a02911a85dca553d7b5d8f9ec7f6595df9ef7e1d368a8885"],
	// 	// 	30,
	// 	// ],
	// 	// enabled:false,
	// 	chainId: 5,
	// 	overrides: { value: parseEther("0.01") },
	// 	signer:signer
	// })
	const { data, isLoading, isSuccess, write } = useContractWrite({
		mode:"recklesslyUnprepared",
		address: "0x8632bD6BE0cA0a7D4A5707F8f1Ff32D099bEefd4",
		abi: abi,
		functionName: "mintInsurancePolicy",
		// args: [
		// 	"0x39fe8fc14729fe40bdaffaa9dc3eca2537c782c1",
		// 	1,
		// 	["0x27b5da64d6aa1a1386a4c2bc890823fa4da72a7c4f8dde38bb5f7e0c67362ea2","0x4e7da0d2b8eef6f7a02911a85dca553d7b5d8f9ec7f6595df9ef7e1d368a8885"],
		// 	30,
		// ],
		// enabled:false,
		chainId: 5,
		overrides: { value: parseEther("0.01") },
		// signer:signer
	})

	function writeContract() {
		if (write) {
			write?.({recklesslySetUnpreparedArgs:["0x39fe8fc14729fe40bdaffaa9dc3eca2537c782c1",BigNumber.from("1"),["0x27b5da64d6aa1a1386a4c2bc890823fa4da72a7c4f8dde38bb5f7e0c67362ea2","0x4e7da0d2b8eef6f7a02911a85dca553d7b5d8f9ec7f6595df9ef7e1d368a8885"],BigNumber.from("30")]})
		} else {
			console.log("Something aint right")
			console.log(data)
			// console.log(error)
			// console.log(isError);
			// console.log(config);
			// console.log(isFetched);
			console.log(write)
		}
	}
	// const
	return (
		<>
			<Button
				sx={{
					backgroundColor: theme.palette.primary.main,
					p: "0.5rem",
					mr: "2rem",
					color: "black",
					borderRadius: 2,
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
						<Typography variant="h4" component="h2" color="black">
							Policy ID: {props.policyId}
						</Typography>
						<Typography variant="h5" sx={{ mt: 2 }} color="black">
							Insurer:{" "}
							{props.address.length > 20
								? props.address.slice(0, 7) +
								  "..." +
								  props.address.slice(-7, -1)
								: props.address}
						</Typography>
						<Typography variant="h5" sx={{ mt: 2 }} color="black">
							Expiry Date: {props.expiryDate}
						</Typography>
						<Typography variant="h5" sx={{ mt: 2 }} color="black">
							Premium Amount: {props.premiumAmount}
						</Typography>
						<Button
							sx={{
								backgroundColor: theme.palette.secondary.main,
								p: "0.5rem",
								color: "black",
								borderRadius: 2,
								mt: "2rem",
							}}
							onClick={writeContract}
						>
							Claim
						</Button>
					</Box>
				</Box>
			</Modal>
		</>
	)
}
