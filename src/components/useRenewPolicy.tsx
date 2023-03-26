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
import { RenewPolicyInterface } from "../../utils/interfaces"

export default function useRenew(props: RenewPolicyInterface) {
    
	// const { data, isError, isLoading } = useContractRead({
	// 	address: "0xF102146713Ea1244eA8D364Ffe8085DD4068FC2c",
	// 	abi: abi,
	// 	functionName: "balanceOf",
	// 	args: ["0xB721347D2938a5594a12DF5Cc36D598b839Cb98f"],
	// })
	// console.log(data.toString())
	const {data:signer} = useSigner()
	// console.log("PolicyId")
	// console.log(props.policyId.toString())
	// console.log("NFT Address")
	// console.log(props.nftAddress.toLowerCase());
	
	// console.log("TokenId")
	// console.log(props.nftTokenId.toString())
	
	// console.log("Days")
	// console.log(props.days.toString())
	
	
	
	const { config, error, isError, isFetched } = usePrepareContractWrite({
		address: "0x8632bD6BE0cA0a7D4A5707F8f1Ff32D099bEefd4",
		abi: abi,
		functionName: "renewPolicy",
		args: [
            BigNumber.from(props.policyId.toString()), //policyId
            // 1,
			props.nftAddress.toLowerCase(), //NFt address
			BigNumber.from(props.nftTokenId.toString()), //Token Id of NFT
			BigNumber.from(props.days.toString()), // Days to be renewed
		],
		// enabled:false,
		chainId: 5,
		overrides: { value: parseEther("0.01") },
		signer:signer
	})
	const { data, isLoading, isSuccess, write } = useContractWrite(config)

	function writeContract() {
		if (write) {
			write?.()
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
    return {writeContract}
	
}