import { makeRoot } from "./merkleTree"
import { deployments } from "./deployment"

export default function getMerkle() {
	const nftAddresslist: string[] = []
	deployments.goerli.map((nft, i) => {
		nftAddresslist.push(nft.proxy)
	})
	console.log(nftAddresslist)

	makeRoot(nftAddresslist)
}
