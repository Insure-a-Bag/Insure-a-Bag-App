import "@/styles/globals.css"
import type { AppProps } from "next/app"
import "@rainbow-me/rainbowkit/styles.css"
import merge from "lodash.merge"
import {
	getDefaultWallets,
	RainbowKitProvider,
	lightTheme,
	Theme,
} from "@rainbow-me/rainbowkit"
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
import { ThemeProvider } from "@mui/material"
import { theme } from "@/components/theme"
import { useEffect, useState } from "react"

const { chains, provider } = configureChains(
	[polygonMumbai, optimismGoerli, goerli],
	[
		// alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }),
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

const myTheme = merge(lightTheme(), {
	colors: {
		accentColor: theme.palette.secondary.main,
		accentColorForeground: "black",
		// modalBackground: theme.palette.primary.main
		menuItemBackground: theme.palette.primary.main,
		connectButtonBackground: theme.palette.secondary.main,
	},
} as Theme)

export default function App({ Component, pageProps }: AppProps) {
	const [ready, setReady] = useState(false)
	useEffect(() => {
		setReady(true)
	}, [])
	return (
		<>
			{ready ? (
				<ThemeProvider theme={theme}>
					<WagmiConfig client={wagmiClient}>
						<RainbowKitProvider chains={chains} theme={myTheme}>
							<Component {...pageProps} />
						</RainbowKitProvider>
					</WagmiConfig>
				</ThemeProvider>
			) : null}
		</>
	)
}
