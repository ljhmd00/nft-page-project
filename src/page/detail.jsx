import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SiChainlink } from "react-icons/si";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Detail() {
    const [metadata, setMetadata] = useState();
    const { tokenId } = useParams();

    const getNft = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_JSON_URL}/${tokenId}.json`);

            setMetadata(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getNft();
    }, []);

    return (
        <Box className="flex flex-col xl-flex-row justify-center items-center py-16 bg-gray-800 min-w-screen w-auto">
            {metadata ? (
                <>
                    <Box className=" max-w-[512px] mx-4">
                        <img className="rounded-t-2xl" src={metadata.image} />

                        <ul className="grid grid-cols-4 gap-1 py-8 bg-gray-600 rounded-b-2xl text-center">
                            {metadata.attributes.map((v, i) => {
                                return (
                                    <li key={i} className="mx-4">
                                        <Box className="font-bold text-gray-950">
                                            {v.trait_type}
                                        </Box>
                                        <Box className="mt-2 border-t-2 font-semibold text-white">
                                            {v.value}
                                        </Box>
                                    </li>
                                );
                            })}
                        </ul>
                        <Box className="relative mt-4 flex flex-col justify-center items-center bg-gray-500 rounded-lg shadow-lg ">
                            <Box className="text-4xl flex items-center text-white font-bold pt-4">
                                <Box>{metadata.name}</Box>
                                <Box className="bg-purple-400 w-8 h-8 rounded-full flex justify-center items-center ml-2 ">
                                    <SiChainlink size={20} />
                                </Box>
                            </Box>
                            <Box className="mt-8 text-2xl text-white font-semibold pb-14">
                                {metadata.description}
                            </Box>
                            <Box className="absolute right-2 bottom-2 rounded-full bg-gray-800 p-2 text-white">
                                <Link to="/main">✖</Link>
                            </Box>
                        </Box>
                    </Box>
                </>
            ) : (
                <Box>로딩중입니다...</Box>
            )}
        </Box>
    );
}
export default Detail;
