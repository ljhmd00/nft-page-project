import { Box } from "@chakra-ui/react";
import Web3 from "web3";
import { useEffect, useState } from "react";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import Intro from "../components/Intro";
import Nfts from "../components/Nfts";
import ToTopBtn from "../components/ToTopBtn";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

function Main({ account }) {
    const [totalNft, setTotalNft] = useState(0);
    const [mintedNft, setMintedNft] = useState(0);
    const [myNft, setMyNft] = useState(0);
    const [page, setPage] = useState(1);

    const getTotalNft = async () => {
        try {
            if (!contract) return;

            const response = await contract.methods.totalNft().call();

            setTotalNft(response);
        } catch (error) {
            console.log(error);
        }
    };

    const getMintedNft = async () => {
        try {
            if (!contract) return;

            const response = await contract.methods.totalSupply().call();
            setMintedNft(response);
            console.log(response);
            setPage(parseInt((response - 1) / 10) + 1);
        } catch (error) {
            console.log(error);
        }
    };

    const getMyNft = async () => {
        try {
            if (!contract || !account) return;

            const response = await contract.methods.balanceOf(account).call();

            setMyNft(response);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getTotalNft();
        getMintedNft();
    }, []);

    useEffect(() => {
        getMyNft();
    }, [account]);

    return (
        <Box className=" relative  bg-gray-800 min-w-screen w-auto min-h-screen ">
            <Intro totalNft={totalNft} mintedNft={mintedNft} myNft={myNft} />
            <Box className="mx-4">
                <Nfts page={page} mintedNft={mintedNft} />
            </Box>
            <ToTopBtn />
        </Box>
    );
}
export default Main;
