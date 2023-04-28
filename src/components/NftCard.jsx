import { SiChainlink } from "react-icons/si";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const NftCard = ({ tokenId, metadata, mintedNft }) => {
    return (
        <Box className="relative rounded-2xl bg-gray-600 pb-4 sm:w-[512px] w-[216px]">
            {parseInt(mintedNft) < tokenId && (
                <Box className="absolute bg-black w-full h-full bg-opacity-50 rounded-2xl flex justify-center items-center text-4xl font-bold text-white">
                    Not Minted
                </Box>
            )}
            <img className=" rounded-t-2xl " src={metadata.image} alt={metadata.name} />
            <Box className="mt-6 text-xl font-bold flex items-center text-gray-100 px-4">
                Da Den Bu
                <Box className="bg-purple-400 w-6 h-6 rounded-full flex justify-center items-center ml-2 ">
                    <SiChainlink size={16} />
                </Box>
                <Box className="sm:text-2xl text-md font-bold px-2">#{tokenId}</Box>
            </Box>
            <Box className="mt-4 sm:text-xl text-md flex justify-end px-4">
                <Link to={`/${tokenId}`}>
                    <button
                        disabled={parseInt(mintedNft) < tokenId}
                        className="bg-gray-200 text-gray-950 px-4 py-2 rounded-xl hover:bg-gray-400"
                    >
                        Detail
                    </button>
                </Link>
            </Box>
        </Box>
    );
};

export default NftCard;
