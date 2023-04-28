import { Box } from "@chakra-ui/react";
import {
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiFillFacebook,
    AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
    return (
        <Box className=" bg-gray-950  text-gray-400 font-semibold flex  justify-between items-center  ">
            <Box className="mb-6 ml-10">
                <Box className="mt-4 sm:text-lg text-md">NFT BANK</Box>
                <Box className="mt-2 sm:text-md text-xs">대표이사: 이주혁</Box>
                <Box className="mt-2 sm:text-md text-xs">사업자 등록번호: 000-00-00000</Box>
                <Box className="mt-2 sm:text-md text-xs">주소: 서울 123-456 7층</Box>
                <Box className="mt-2 sm:text-md text-xs">이메일: liketiger@liketiger.io</Box>
            </Box>
            <Box className="bm-6 mr-10 flex gap-2">
                <AiOutlineInstagram className="sm:text-4xl" />
                <AiOutlineTwitter className="sm:text-4xl" />
                <AiFillFacebook className="sm:text-4xl" />
                <AiOutlineYoutube className="sm:text-4xl" />
            </Box>
            <Box className="bm-6 mr-10">
                <Box className="mt-2 sm:text-md text-xs">이용약관</Box>
                <Box className="mt-2 sm:text-md text-xs">개인정보처리방침</Box>
                <Box className="mt-2 sm:text-md text-xs">자주묻는질문</Box>
            </Box>
        </Box>
    );
};
export default Footer;
