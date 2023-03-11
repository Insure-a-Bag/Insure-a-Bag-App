import "@/styles/globals.css"
import type { AppProps } from "next/app"
import "@rainbow-me/rainbowkit/styles.css"
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { configureChains, createClient, WagmiConfig } from "wagmi"
import {
	polygonMumbai,
	baseGoerli,
	optimismGoerli,
	goerli,
	arbitrumGoerli,
} from "wagmi/chains"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"

const { chains, provider } = configureChains(
	[polygonMumbai, optimismGoerli, goerli],
	[
		// alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
		publicProvider(),
	],
)
const { connectors } = getDefaultWallets({
	appName: "Insure-A-Bag",
	chains,
})
const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider chains={chains}>
				<Component {...pageProps} />
			</RainbowKitProvider>
		</WagmiConfig>
	)
}
