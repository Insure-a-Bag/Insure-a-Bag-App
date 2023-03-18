import { Box, Container, Typography } from "@mui/material"
import PolicyNFTCard from "./PolicyNFTCard"
import { policies } from "../../utils/mockPolicies"
export default function PolicyBody() {
	return (
		<Box component="h1" sx={{ backgroundColor: "white", color: "black" }}>
			<Container sx={{ py: "5rem",  }}>
				<Typography align="left" variant="h2" sx={{ mb: "3rem" }}>
					Your Policy Dashboard
				</Typography>
				<Box component="div" sx={{display:"grid", gridTemplateColumns: "repeat(3,1fr)", gap:10}}>
					<PolicyNFTCard
						policyId={policies.policyId}
						expiryDate={policies.expiryDate}
						imagePath={policies.imagePath}
						address={policies.address}
					/>
					<PolicyNFTCard
						policyId={policies.policyId}
						expiryDate={policies.expiryDate}
						imagePath={policies.imagePath}
						address={policies.address}
					/>
					<PolicyNFTCard
						policyId={policies.policyId}
						expiryDate={policies.expiryDate}
						imagePath={policies.imagePath}
						address={policies.address}
					/>
                    <PolicyNFTCard
						policyId={policies.policyId}
						expiryDate={policies.expiryDate}
						imagePath={policies.imagePath}
						address={policies.address}
					/>
					<PolicyNFTCard
						policyId={policies.policyId}
						expiryDate={policies.expiryDate}
						imagePath={policies.imagePath}
						address={policies.address}
					/>
					<PolicyNFTCard
						policyId={policies.policyId}
						expiryDate={policies.expiryDate}
						imagePath={policies.imagePath}
						address={policies.address}
					/>
				</Box>
			</Container>
		</Box>
	)
}
