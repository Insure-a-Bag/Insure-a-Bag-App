import * as React from "react";
import NFTCard from "./NFTCard";
import Grid from "@mui/material/Grid";
import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: process.env.ALCHEMY_API_KEY, 
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

// const main = async () => {
//     // Get all NFTs
//     const nfts = await alchemy.nft.getNftsForOwner("nick.eth");
//     // Print NFTs
//     // console.log(Object.keys(nfts));
  
//     const ownedNFTs = nfts.ownedNfts
  
//     ownedNFTs.forEach(nft => {
//       if (nft.title.startsWith("Sheet")) {
//           // console.log("Title: " + nft.title)
//           // console.log("Price: " + nft.contract.openSea.floorPrice)
//           // console.log("Token Type: " + nft.contract.tokenType)
//           // console.log("Insurable: " + nft.contract.tokenType === "ERC721" ? "Yes" : "No")
//           // console.log("Image: " + nft.rawMetadata.image)
//           console.log(nft)
//       }
//     })
//   };

// Test NFTs
// TODO -> Add query to fetch user's NFTs
let nfts = [
    {
      title: "Winter Knight #130/144",
      price: 0.012,
      image:
        "https://ether-cards.mypinata.cloud/ipfs/Qmf1bHMzb7AXt3ia8o1YBM5eGntdu1ZhAGG1AKjsC6K3kZ"
    },
    {
      title: "Summer Knight #6/144",
      price: 0.014,
      image:
        "https://ether-cards.mypinata.cloud/ipfs/QmREh7tAE3LZaPPmj9qvu1X3NGypYxP9Zcp44sYek2J9KP"
    },
    {
      title: "Winter Elf #104/144",
      price: 0.08,
      image:
        "https://ether-cards.mypinata.cloud/ipfs/QmSxrJkSxhNd9JYkNEQvbEq5vLuqMXMV9jFVc4nBRTu4B7"
    },
    {
      title: "Touch of Autumn",
      price: 0.088,
      image: "https://cryptotrunks.co/poap/03-fall.gif"
    },
    {
      title: "resolver.addr",
      price: 0.35,
      image: "https://arweave.net/tf18NDVDa34kgQFzyLavOfgkLE3ax5lRoA4Yif7n7F0"
    },
    {
      title: "BASTARD GAN PUNK V2 #3124",
      price: 1.24,
      image: "https://ipfs.io/ipfs/QmdNVESKqpN3SekfEDHVNGSdXVftE1kv1QY1n5SMF9A6gj"
    },
    {
      title: "05h00.eth",
      price: 0.088,
      image:
        "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0x432506d356331eb8c93052979e1dffc4cc8a3457dc9ce9f67f2ee47ece434b7d/image"
    },
];

export default function NFTCollection(props: any) {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      style={{ padding: "200px" }}
    >
      {props.cards.map((card: any) => (
        <Grid key={card.title} item xs={12} sm={6} md={4} lg={3}>
          <NFTCard title={card.title} price={card.price} image={card.image} />
        </Grid>
      ))}
    </Grid>
  );
}