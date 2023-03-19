import { Box } from "@mui/material"
import { Chat } from "@pushprotocol/uiweb"
import { useAccount } from "wagmi"

export default function PushSupportChat() {
	const { address } = useAccount()

	return (
		<Box>
			<Chat
				account={address} //user address
				supportAddress="0xcB399226a65DF8964482daA5B1CB98478493CC4d" //support address
                env="staging"
			/>
		</Box>
	)
}
