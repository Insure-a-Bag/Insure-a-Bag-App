import abi from "../../utils/abi.json"
import {
	useAccount,
	useContractRead,
	useContractWrite,
	usePrepareContractWrite,
	useSigner,
    erc20ABI
} from "wagmi"
import { parseEther } from "@ethersproject/units"
import { BigNumber } from "alchemy-sdk"

export default function useRenewPolicyApe() {
    
	// const { data:readData } = useContractRead({
	// 	address: "0xF102146713Ea1244eA8D364Ffe8085DD4068FC2c",
	// 	abi: abi,
	// 	functionName: "balanceOf",
	// 	args: ["0xB721347D2938a5594a12DF5Cc36D598b839Cb98f"],
	// })
	// console.log(data.toString())
	const {data:signer} = useSigner()
    const { config:config2} = usePrepareContractWrite({
		address: "0xF102146713Ea1244eA8D364Ffe8085DD4068FC2c",
		abi: erc20ABI,
		functionName: "approve",
		args: [
            "0x8632bD6BE0cA0a7D4A5707F8f1Ff32D099bEefd4",
			BigNumber.from("115792089237316195423570985008687907853269984665640564039457")
		],
		// enabled:false,
		chainId: 5,
		// overrides: { value: parseEther("0.01") },
		signer:signer
	})
	const { data:data2, write:write2 } = useContractWrite(config2)
	const { config, error, isError, isFetched } = usePrepareContractWrite({
		address: "0x8632bD6BE0cA0a7D4A5707F8f1Ff32D099bEefd4",
		abi: abi,
		functionName: "renewPolicyApe",
		args: [
            BigNumber.from("3"), // This needs to be changed to the appropirate policyID
			"0x39fe8fc14729fe40bdaffaa9dc3eca2537c782c1", // This needs to be changed to the appropriate NFT address
			BigNumber.from("5"), // This needs to be changed to the appropriate tokenId of the NFT
			// ["0x27b5da64d6aa1a1386a4c2bc890823fa4da72a7c4f8dde38bb5f7e0c67362ea2","0x4e7da0d2b8eef6f7a02911a85dca553d7b5d8f9ec7f6595df9ef7e1d368a8885"],
			BigNumber.from("30"), // // This needs to be changed to the appropriate days from input
		],
		// enabled:false,
		chainId: 5,
		// overrides: { value: parseEther("0") },
		signer:signer
	})
	const { data, isLoading, isSuccess, write } = useContractWrite(config)
    
	function writeContract() {
		if (write) {
			write?.()
		} else if(write2) {
            write2?.()
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