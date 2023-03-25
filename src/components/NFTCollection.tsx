import * as React from "react";
import NFTCard from "./NFTCard";
import Grid from "@mui/material/Grid";
// import { Alchemy, Network, NftFilters } from "alchemy-sdk";
// import { useAccount } from "wagmi";

// const config = {
//   apiKey: process.env.ALCHEMY_API_KEY, 
//   network: Network.ETH_MAINNET,
// };
// const alchemy = new Alchemy(config);

let nfts = [
  {
    title: "Dragonox #9/33",
    price: 6.8012,
    image:
      "https://images.nightcafe.studio/jobs/kNrvjJHQ1EHMIW81gELB/kNrvjJHQ1EHMIW81gELB--1--72dez.jpg?tr=w-1600,c-at_max"
  },
  {
    title: "Dystopiatic",
    price: 4.324,
    image:
      "https://i.seadn.io/gcs/files/9aa620dc91092788147cd0e175f73c49.png?auto=format&w=1000"
  },
  {
    title: "The Castle of Nadria",
    price: 2.478,
    image:
      "https://images.nightcafe.studio/jobs/FlHRJYuTdhYTZqEfEo9K/FlHRJYuTdhYTZqEfEo9K--1--l0dal.jpg?tr=w-1600,c-at_max"
  },
  {
    title: "Touch of Autumn",
    price: 1.337,
    image: "https://cryptotrunks.co/poap/03-fall.gif"
  },
  {
    title: "Siege of Xervier",
    price: 0.981,
    image: "https://images.nightcafe.studio/jobs/bHKQ9VYdGfZAqda1YJ2r/bHKQ9VYdGfZAqda1YJ2r--1--v6q2q.jpg?tr=w-1600,c-at_max"
  },
  {
    title: "Air Raid #12/122",
    price: 1.24,
    image: "https://images.nightcafe.studio/jobs/WWV19f26fs7n32a6j1dz/WWV19f26fs7n32a6j1dz--1--3tdqb.jpg?tr=w-1600,c-at_max"
  },
  {
    title: "The Black Pearl",
    price: 7.833,
    image:
      "https://images.nightcafe.studio/jobs/lv52tXdcTWVBllHQlabO/lv52tXdcTWVBllHQlabO--1--gqudu.jpg?tr=w-1600,c-at_max"
  },
  {
    title: "DD-78 #24/40",
    price: 3.2,
    image:
      "https://images.nightcafe.studio/jobs/jE99lRmHMbIXRX85aqDL/jE99lRmHMbIXRX85aqDL--1--muzp2.jpg?tr=w-1600,c-at_max"
  },
  {
    title: "Z3rC7 #13/40",
    price: 1.766,
    image:
      "https://images.nightcafe.studio/jobs/HKvG2XpJXqFBPMKrXqkq/HKvG2XpJXqFBPMKrXqkq--1--73isp.jpg?tr=w-1600,c-at_max"
  }, 
  {
    title: "End of the Road",
    price: 0.55,
    image:
      "https://images.nightcafe.studio/jobs/hLYjSQHKD1jjtnxvR0Sj/hLYjSQHKD1jjtnxvR0Sj--1--ubkht.jpg?tr=w-1600,c-at_max"
  },
  {
    title: "Raxnus",
    price: 1.766,
    image:
      "https://images.nightcafe.studio/jobs/v72USYcv2A2hLS2BLT2D/v72USYcv2A2hLS2BLT2D--1--rf4w0.jpg?tr=w-1600,c-at_max"
  },
  {
    title: "Corn Field",
    price: 3.38,
    image:
      "https://images.nightcafe.studio/jobs/TzAgIILIT8mxu2BNJ4QO/TzAgIILIT8mxu2BNJ4QO--1--i37x2.jpg?tr=w-1600,c-at_max"
  },
];

interface OwnedNft {
  title: string;
  price: number;
  image: string;
}

export default function NFTCollection() {
  // const { address } = useAccount()  
  // const [nfts, setNfts] = React.useState<OwnedNft[]>([]);
  // const memoizedNfts = React.useMemo(() => nfts, [nfts]);

  // React.useEffect(() => {
  //   const fetchNfts = async () => {
  //     if (address) {
  //         let usersNfts = await alchemy.nft.getNftsForOwner(address, { excludeFilters: [NftFilters.SPAM] });
  //         let ownedNfts = usersNfts.ownedNfts
  //         let finalNfts: OwnedNft[] = []

  //         ownedNfts.forEach(nft => {
  //           if (nft.contract.tokenType === "ERC721" && nft.title && nft.contract.openSea && nft.hasOwnProperty("rawMetadata")) {
  //             let title = nft.title;
  //             let price: number | undefined = nft.contract.openSea.floorPrice;
  //             let image = ""
  //             if (nft.rawMetadata) {
  //               let image: string | undefined = nft.rawMetadata.image;
  //             }
  //             if (title && price && image) {
  //               finalNfts.push({title, price, image})
  //             }
  //           }
  //         })
  
  //         setNfts(finalNfts);
  //     }
  //   };

  //   fetchNfts();
  // }, [address]);

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      style={{ padding: "200px" }}
    >
      {nfts.map((card: OwnedNft) => (
        <Grid key={card.title} item xs={12} sm={6} md={4} lg={3}>
          <NFTCard title={card.title} price={card.price} image={card.image} />
        </Grid>
      ))}
    </Grid>
  );
}

