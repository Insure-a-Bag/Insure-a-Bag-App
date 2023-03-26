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
import { RenewPolicyInterface } from "../../utils/interfaces"

export default function useRenewPolicyApe(props: RenewPolicyInterface) {
    
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
			BigNumber.from(props.policyId.toString()), //policyId
            // 1,
			props.nftAddress.toLowerCase(), //NFt address
			BigNumber.from(props.nftTokenId.toString()), //Token Id of NFT
			BigNumber.from(props.days.toString()), // Days to be renewed
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