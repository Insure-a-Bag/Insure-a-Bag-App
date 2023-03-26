import { Box, Container, Typography } from "@mui/material"
import PolicyNFTCard from "./PolicyNFTCard"
import { policies as mockPolicy } from "../../utils/mockPolicies"
import PushSupportChat from "./PushSupportChat"
import { useAccount } from "wagmi"
import { createClient } from "urql"
import { useEffect, useState } from "react"
import { propsToClassKey } from "@mui/styles"
export default function PolicyBody() {
	const [policies,setPolicies] = useState<any[]>([])
	const { address, isConnected } = useAccount()
	const apiUrl = "https://api.studio.thegraph.com/query/44402/insureabag/v0.0.9"
	const query = `
	query($address: String!){
		user(id: $address){
			  policies {
				id
			policyId
			address
			tokenId
			expiryTime
			  }
		}
	  }
	`

	const client = createClient({
		url: apiUrl,
	})
	async function fetchDataFromGraph() {
		const {data:data1} = await client.query(query,{address:address?.toLowerCase()}).toPromise().then((result) => result)
		console.log(data1.user.policies)
		setPolicies(data1.user.policies)
		// setName(data1.data.user)
	}
	useEffect(() => {
		if (isConnected) {
			// const add = address.toLocaleLowerCase()
			fetchDataFromGraph()
		}
	}, [address])
	return (
		<Box
			component="h1"
			sx={{ backgroundColor: "white", color: "black", pr: "175px" }}
		>
			<Container sx={{ py: "5rem" }}>
				<Typography variant="h2" sx={{my:"3rem"}}> Your Policies</Typography>
				<Typography variant="h5" sx={{my:"3rem"}}>Find your Insurance Policies here</Typography>
				{isConnected?<Box
					component="div"
					sx={{
						display: "grid",
						gridTemplateColumns: "repeat(3,1fr)",
						gap: 10,
					}}
				>
					{policies.map((policy, i) => (
						<PolicyNFTCard
							key={i}
							policyId={parseInt(policy.policyId)}
							expiryDate={policy.expiryTime}
							imagePath={mockPolicy[i].imagePath}
							address={policy.address}
							premiumAmount={mockPolicy[i].premiumAmount}
							policyAddress={policy.address}
							tokenId={parseInt(policy.tokenId)}
						/>
					))}
				</Box>
				:
				null}
				{/* <Box
					component="div"
					sx={{
						display: "grid",
						gridTemplateColumns: "repeat(3,1fr)",
						gap: 10,
					}}
				>
					{policies.map((policy, i) => (
						<PolicyNFTCard
							key={i}
							policyId={parseInt(policy.policyId)}
							expiryDate={policy.expiryTime}
							imagePath={mockPolicy[i].imagePath}
							address={policy.address}
							premiumAmount={mockPolicy[i].premiumAmount}
							policyAddress={policy.address}
							tokenId={parseInt(policy.tokenId)}
						/>
					))}
				</Box> */}
			</Container>
			<PushSupportChat />
		</Box>
	)
}
