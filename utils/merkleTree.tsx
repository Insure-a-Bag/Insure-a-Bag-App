import keccak256 from "keccak256"
import MerkleTree from "merkletreejs"
import { MerkleTreeReturn } from "./interfaces"
import { deployments } from "./deployment"
export function makeRoot(allowList:string[]): MerkleTreeReturn {
    const _leaves = allowList.map((x) => keccak256(x))
    // Safe this tree along with other metadata in IPFS
    const tree = new MerkleTree(_leaves, keccak256, { sortPairs: true })
    const _root = tree.getHexRoot()
    const leaf = keccak256("0x39fe8fc14729fe40bdaffaa9dc3eca2537c782c1")
    const _proof = tree.getHexProof(leaf)
    console.log(_root)
    console.log("Prooof-");
    
    console.log(_proof)
    
    const returnValue:MerkleTreeReturn = {tree:tree, root:_root}
    return returnValue
}
// ["0x27b5da64d6aa1a1386a4c2bc890823fa4da72a7c4f8dde38bb5f7e0c67362ea2","0x4e7da0d2b8eef6f7a02911a85dca553d7b5d8f9ec7f6595df9ef7e1d368a8885"]
// ["0x27b5da64d6aa1a1386a4c2bc890823fa4da72a7c4f8dde38bb5f7e0c67362ea2","0x4e7da0d2b8eef6f7a02911a85dca553d7b5d8f9ec7f6595df9ef7e1d368a8885"]
// 100002000000000000000000000000000
// 