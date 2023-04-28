import { Box, Text } from "@chakra-ui/react";
import { AiFillBank } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWallet } from "react-icons/fa";

import axios from "axios";

const Header = ({ account, setAccount }) => {
    const [coinPrice, setCoinPrice] = useState();

    const getCoinPrice = async () => {
        try {
            const response = await axios.get(
                "https://api.upbit.com/v1/ticker?markets=KRW-BTC,%20KRW-ETH,%20KRW-MATIC"
            );
            setCoinPrice([
                { symbol: "BTC", price: response.data[0].trade_price },
                { symbol: "ETH", price: response.data[1].trade_price },
                { symbol: "MATIC", price: response.data[2].trade_price },
            ]);
        } catch (error) {
            console.error(error);
        }
    };

    const onClickAccount = async () => {
        try {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccount(accounts[0]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCoinPrice();
    }, []);

    return (
        <Box className=" flex justify-around items-center bg-gray-900 min-w-screen w-auto pb-4">
            <Link to="/main">
                <Box className="text-gray-200 mt-4 flex items-center ">
                    <AiFillBank className="sm:text-[62px] text-[32px]" />
                    <Text
                        className="ml-1 sm:text-4xl font-bold text-sm"
                        bgGradient="linear(to-r, white, #C44FEB)"
                        bgClip="text"
                    >
                        NFT BANK
                    </Text>
                </Box>
            </Link>
            <Box className="mt-5 flex items-center">
                {coinPrice && (
                    <ul className="flex text-gray-400 sm:text-sm text-[6px]">
                        {coinPrice.map((v, i) => {
                            return (
                                <li key={i} className="ml-2">
                                    {v.symbol}: {(v.price / 1000).toLocaleString()}K₩
                                </li>
                            );
                        })}
                    </ul>
                )}
            </Box>
            {account ? (
                <Box className="mt-5 flex items-center">
                    <Box className=" bg-purple-400 sm:w-8 sm:h-8  w-4 h-4 rounded-full flex justify-center items-center text-white">
                        <FaWallet className="sm:text-[16px] text-[8px]" />
                    </Box>
                    <Box className="ml-1 text-white sm:text-md text-sm">
                        {account.substring(0, 4)}...{account.substring(account.length - 4)}
                    </Box>
                </Box>
            ) : (
                <Box
                    onClick={onClickAccount}
                    className="sm:text-2xl text-sm font-bold  text-purple-300 hover:cursor-pointer mt-5"
                    bgGradient="linear(to-r,  #C44FEB, white)"
                    bgClip="text"
                >
                    Connect
                </Box>
            )}
        </Box>
    );
};
export default Header;
