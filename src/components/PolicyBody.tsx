import { Box, Container, Typography } from "@mui/material"
import PolicyNFTCard from "./PolicyNFTCard"
import { policies } from "../../utils/mockPolicies"
import PushSupportChat from "./PushSupportChat"
export default function PolicyBody() {
	return (
		<Box component="h1" sx={{ backgroundColor: "white", color: "black", pr: "175px" }}>
			<Container sx={{ py: "5rem" }}>
				<Box
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
							policyId={policy.policyId}
							expiryDate={policy.expiryDate}
							imagePath={policy.imagePath}
							address={policy.address}
							premiumAmount={policy.premiumAmount}
							policyAddress={policy.policyAddress}
						/>
					))}
				</Box>
			</Container>
			<PushSupportChat/>
		</Box>
	)
}
