import MerkleTree from "merkletreejs"

export interface MerkleTreeReturn {
    tree: MerkleTree
    root: string
}

export interface PolicyNFTCardInterface {
    policyId: string,
    imagePath: string,
    expiryDate: string,
    address: string,
    premiumAmount: number,
    policyAddress: string
}