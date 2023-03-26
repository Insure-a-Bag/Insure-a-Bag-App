import { makeRoot } from "./merkleTree"
import { deployments } from "./deployment"
import { MerkleTreeReturn } from "./interfaces"

export default function getMerkle() {
	const nftAddresslist: string[] = []
	deployments.goerli.map((nft, i) => {
		nftAddresslist.push(nft.proxy)
	})
	console.log(nftAddresslist)

	const value:MerkleTreeReturn = makeRoot(nftAddresslist)
	return value
}
