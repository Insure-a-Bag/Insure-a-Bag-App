import MerkleTree from "merkletreejs"

export interface MerkleTreeReturn {
    tree: MerkleTree
    root: string
}

export interface PolicyNFTCardInterface {
    policyId: number,
    imagePath: string,
    expiryDate: string,
    address: string,
    tokenId: number
    premiumAmount: number,
    policyAddress: string
}

export interface MintPolicyInterface {
    nftAddress: string,
    nftTokenId: number,
    proof: string[],
    days: number
}
export interface RenewPolicyInterface {
    nftAddress: string,
    nftTokenId: number,
    policyId: number,
    days: number
}