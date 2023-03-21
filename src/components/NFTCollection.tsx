import * as React from "react";
import NFTCard from "./NFTCard";
import Grid from "@mui/material/Grid";
import { Alchemy, Network, NftFilters } from "alchemy-sdk";
import { useAccount } from "wagmi";

const config = {
  apiKey: process.env.ALCHEMY_API_KEY, 
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

interface OwnedNft {
  title: string;
  price: number;
  image: string;
}

export default function NFTCollection() {
  const { address } = useAccount()  
  const [nfts, setNfts] = React.useState<OwnedNft[]>([]);
  const memoizedNfts = React.useMemo(() => nfts, [nfts]);

  React.useEffect(() => {
    const fetchNfts = async () => {
      if (address) {
          let usersNfts = await alchemy.nft.getNftsForOwner(address, { excludeFilters: [NftFilters.SPAM] });
          let ownedNfts = usersNfts.ownedNfts
          let finalNfts: OwnedNft[] = []

          ownedNfts.forEach(nft => {
            if (nft.contract.tokenType === "ERC721" && nft.title && nft.contract.openSea && nft.hasOwnProperty("rawMetadata")) {
              let title = nft.title;
              let price: number | undefined = nft.contract.openSea.floorPrice;
              let image = ""
              if (nft.rawMetadata) {
                let image: string | undefined = nft.rawMetadata.image;
              }
              if (title && price && image) {
                finalNfts.push({title, price, image})
              }
            }
          })
  
          setNfts(finalNfts);
      }
    };

    fetchNfts();
  }, [address]);

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      style={{ padding: "200px" }}
    >
      {memoizedNfts.map((card: OwnedNft) => (
        <Grid key={card.title} item xs={12} sm={6} md={4} lg={3}>
          <NFTCard title={card.title} price={card.price} image={card.image} />
        </Grid>
      ))}
    </Grid>
  );
}

