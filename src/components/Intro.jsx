import { Box, Image } from "@chakra-ui/react";
import { SiChainlink } from "react-icons/si";
import { CONTRACT_ADDRESS } from "../web3.config";

const ranNum = Math.floor(Math.random() * 30) + 1;
const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;
console.log(imgSrc);

const Intro = ({ totalNft, mintedNft, myNft }) => {
    return (
        <Box className="min-w-screen w-auto">
            <Box className="bg-gradient-to-b from-transparent  to-gray-400 pt-10 ">
                <Box className="max-w-screen-xl mx-auto relative">
                    <Box className="absolute top-1/2 left-1/2  -translate-x-1/2  -translate-y-1/2 sm:text-9xl text-6xl text-white truncate opacity-20 pointer-events-none">
                        NFT BANK
                    </Box>
                    <Box className="relative ">
                        <Image
                            className="absolute w-40 h-40 rounded-full shadow-md ml-2 "
                            src={imgSrc}
                            art="NFT"
                        />
                        <Box className="ml-2 w-40 h-40 rounded-full shadow-md bg-white text-black flex justify-center items-center top-0 ">
                            Loading...
                        </Box>
                    </Box>
                    <Box className="mt-4 ml-14 text-2xl font-bold flex items-center ">
                        .env
                        <Box className="bg-purple-400 w-6 h-6 rounded-full flex justify-center items-center ml-4 text-white">
                            <SiChainlink size={16} />
                        </Box>
                    </Box>
                    <Box className="mt-2 ml-2 flex items-center text-gray-950 font-bold">
                        by
                        <Box className="text-white mt-1 ml-2 text-sm">{CONTRACT_ADDRESS}</Box>
                    </Box>
                    <Box className="mt-4 ml-4 text-gray-700 font-semibold">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                        velit aut possimus, nostrum ea eaque minima temporibus, quaerat iste dolores
                        rem quam maxime totam! Voluptatem voluptas recusandae consequatur eligendi
                        eaque.
                    </Box>
                    <Box className="py-4 text-center flex">
                        <Box>
                            <Box className="font-bold">{totalNft}</Box>
                            <Box className="text-gray-600 font-semibold">총 NFT</Box>
                        </Box>
                        <Box className="ml-4">
                            <Box className="font-bold">{mintedNft}</Box>
                            <Box className="text-gray-600 font-semibold">발행된 NFT</Box>
                        </Box>
                        <Box className="ml-4">
                            <Box className="font-bold">{myNft}</Box>
                            <Box className="text-gray-600 font-semibold">내 NFT</Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Intro;
