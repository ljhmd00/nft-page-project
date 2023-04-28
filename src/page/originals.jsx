import { Box, Text, Image, Button, Collapse } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillBank } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";
import Img1 from "../images/medi_checkpoint_01.png";
import Img2 from "../images/medi_checkpoint_02.png";
import Img3 from "../images/medi_checkpoint_03.png";
import Img4 from "../images/medi_checkpoint_04.png";
import Img5 from "../images/img_util_detail_web.png";
import metaImg1 from "../images/medi_metamask_info_01.png";
import metaImg2 from "../images/medi_metamask_info_02.png";
import metaImg3 from "../images/medi_metamask_info_03.png";
import metaImg4 from "../images/medi_metamask_info_04.png";
import metaImg5 from "../images/medi_metamask_info_05.png";
import metaImg6 from "../images/medi_metamask_info_06.png";
import metaImg7 from "../images/medi_metamask_info_07.png";
import ToTopBtn from "../components/ToTopBtn";

function Original() {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

    const Toggle1 = () => setIsOpen1(!isOpen1);
    const Toggle2 = () => setIsOpen2(!isOpen2);
    const Toggle3 = () => setIsOpen3(!isOpen3);
    const Toggle4 = () => setIsOpen4(!isOpen4);

    return (
        <Box className="min-h-screen">
            <ToTopBtn />
            <Box className="flex justify-center"></Box>
            <Box className="bg-gradient-to-b to-gray-500 from-gray-800  flex flex-col justify-center items-center ">
                <Box className="text-center mt-60 ">
                    <Text
                        fontWeight="extrabold"
                        textColor="whiteAlpha.900"
                        className="sm:text-3xl text-md"
                    >
                        NFT로 만나는 나의 첫 번째 BANK 커뮤니티
                    </Text>
                    <Link to="/main">
                        <Box className="flex justify-center items-center text-white mb-6">
                            <AiFillBank className="sm:text-[100px] text-lg " />
                            <Text
                                bgGradient="linear(to-r, white, #C44FEB)"
                                bgClip="text"
                                fontWeight="extrabold"
                                className="sm:text-6xl text-2xl"
                            >
                                NFT BANK
                            </Text>
                        </Box>
                        <Button
                            bg="#C44FEB"
                            className="sm:text-2xl text-md font-extrabold text-white hover:text-purple-400 mb-40"
                        >
                            바로가기
                        </Button>
                    </Link>
                </Box>
            </Box>
            <Box className="text-center flex flex-col justify-center items-center  bg-gray-600">
                <Text className="mt-20 sm:text-xl font-semibold text-white text-sm">
                    오직 <sapn className="text-purple-400 font-bold">NFT BANK</sapn> 에서만 만날 수
                    있는 특별한 NFT 멤버십
                </Text>
                <Box className=" grid gird-cols-1 sm:grid-cols-2 justify-items-center gap-20 mt-10 mb-8">
                    <Box className="flex flex-col justify-center items-center">
                        <Image
                            borderRadius="full"
                            className="sm:w-60 sm:h-60 w-40 h-40"
                            src={Img1}
                            alt="Img1"
                        />
                        <Text className="mt-4 text-white sm:text-sm text-xs">
                            최소 5년 이상 유지되는 NFT 기본 혜택
                        </Text>
                    </Box>
                    <Box className="flex flex-col justify-center items-center">
                        <Image
                            borderRadius="full"
                            className="sm:w-60 sm:h-60 w-40 h-40"
                            src={Img2}
                            alt="Img2"
                        />
                        <Text className="mt-4 text-white sm:text-sm text-xs">
                            원하는 혜택을 함께 만들어가는 커뮤니티
                        </Text>
                    </Box>
                    <Box className="flex flex-col justify-center items-center">
                        <Image
                            borderRadius="full"
                            className="sm:w-60 sm:h-60 w-40 h-40"
                            src={Img3}
                            alt="Img3"
                        />
                        <Text className="mt-4 text-white sm:text-sm text-xs">
                            보유만 해도 늘어나는 즐거움
                        </Text>
                    </Box>
                    <Box className="flex flex-col justify-center items-center ">
                        <Image
                            borderRadius="full"
                            className="sm:w-60 sm:h-60 w-40 h-40"
                            src={Img4}
                            alt="Img4"
                        />
                        <Text className="mt-4 text-white sm:text-sm text-xs">
                            편리한 양도와 재판매
                        </Text>
                    </Box>
                </Box>
                <Box className="text-white mt-40 mb-20">
                    <Text className="sm:text-4xl text-md font-bold">디스코드를 통해</Text>
                    <Text className="sm:text-4xl text-md font-bold">무엇이든 물어보세요!</Text>
                    <Button bg="#6c71c4" className="hover:text-purple-400 mt-5">
                        <FaDiscord className="sm:text-4xl" />
                        <span className="sm:text-xl ml-2 text-xs">디스코드 바로가기</span>
                    </Button>
                </Box>
                <Box className="mt-20">
                    <Text className="sm:text-4xl text-md font-semibold text-white">
                        지금바로 구매하세요!
                    </Text>
                    <Image className="px-4 mt-4" src={Img5} alt="Img5"></Image>
                </Box>
                <Box className="mt-40 text-white">
                    <Text className="sm:text-4xl text-lg font-bold">메타마스크 연결하는 방법</Text>
                    <Text className="bg-gray-700 py-2 mt-10 sm:text-2xl text-md font-semibold">
                        1.메타마스크 생성
                    </Text>
                    <Box className="mt-8 grid gird-cols-1 sm:grid-cols-4 grid-cols-2 gap-8 px-4">
                        <Box>
                            <Image src={metaImg1} alt="metaImg1"></Image>
                            <Text className="sm:text-sm text-xs mt-4">
                                앱스토어 / 플레이스토어 접속 후 메타마스크 설치
                            </Text>
                        </Box>
                        <Box>
                            <Image src={metaImg2} alt="metaImg2"></Image>
                            <Text className="sm:text-sm text-xs mt-4">
                                1차 보안을 위한 비밀번호 설정
                            </Text>
                        </Box>
                        <Box>
                            <Image src={metaImg3} alt="metaImg3"></Image>
                            <Text className="sm:text-sm text-xs mt-4">
                                2차 보안을 위한 비밀 복구 구문 보관
                            </Text>
                        </Box>
                        <Box>
                            <Image src={metaImg4} alt="metaImg4"></Image>
                            <Text className="sm:text-sm text-xs mt-4">
                                PC는 메타마스크 확장 프로그램 사용
                            </Text>
                        </Box>
                    </Box>
                    <Text className="bg-gray-700 py-2 mt-8 sm:text-2xl text-md font-semibold">
                        2.메타마스크 연결
                    </Text>
                    <Box className="mt-8 grid gird-cols-1 sm:grid-cols-4 grid-cols-2 gap-8 px-4">
                        <Box>
                            <Image src={metaImg5} alt="metaImg5"></Image>
                            <Text className="sm:text-sm text-xs mt-4">
                                지갑 버튼을 클릭해 메타마스크 연결
                            </Text>
                        </Box>
                        <Box>
                            <Image src={metaImg6} alt="metaImg6"></Image>
                            <Text className="sm:text-sm text-xs mt-4">
                                서비스의 요청에 따라 연결을 진행
                            </Text>
                        </Box>
                        <Box>
                            <Image src={metaImg7} alt="metaImg7"></Image>
                            <Text className="sm:text-sm text-xs mt-4">메타마스크 연결 완료</Text>
                        </Box>
                    </Box>
                </Box>
                <Box className="text-white mt-40 mb-20">
                    <Box
                        onClick={Toggle1}
                        className="sm:w-[500px] w-[300px] bg-gray-700 flex justify-between hover:cursor-pointer"
                    >
                        <Text className="ml-4 my-1">NFT란 무엇인가요?</Text>
                        <Box className="mr-4 my-1 sm:text-2xl text-xl">{isOpen1 ? "-" : "+"}</Box>
                    </Box>
                    <Collapse in={isOpen1} animateOpacity>
                        <Box bg="gray.700">
                            <Text className="sm:w-[500px] w-[300px] sm:text-sm text-xs px-4 py-2">
                                NFT(Non-Fungible Token)은 대체 불가능한 토큰으로 원본을 함부로
                                바꾸거나, 복제할 수 없도록 블록체인 기술 안에서 원본을 인증받을 수
                                있으며 거래가 가능한 가상 자산이자, 특정 대상에 대한 인증서 기능을
                                할 수 있습니다.
                            </Text>
                        </Box>
                    </Collapse>
                    <Box
                        onClick={Toggle2}
                        className="sm:w-[500px] w-[300px] bg-gray-700 flex justify-between hover:cursor-pointer"
                    >
                        <Text className="ml-4 my-1">DaDenBu NFT 가격은 얼마인가요?</Text>
                        <Box className="mr-4 my-1 sm:text-2xl text-xl">{isOpen2 ? "-" : "+"}</Box>
                    </Box>
                    <Collapse in={isOpen2} animateOpacity>
                        <Box bg="gray.700">
                            <Text className="sm:w-[500px] w-[300px] sm:text-sm text-xs px-4 py-2">
                                프라이빗 세일 20만 원, 사전예약 판매 30만 원, 전체 판매 35만 원 or
                                0.211 ETH입니다.
                            </Text>
                        </Box>
                    </Collapse>
                    <Box
                        onClick={Toggle3}
                        className="sm:w-[500px] w-[300px] bg-gray-700 flex justify-between hover:cursor-pointer"
                    >
                        <Text className="ml-4 my-1">
                            계좌이체로 결제한 경우 NFT는 언제 받을 수 있나요?
                        </Text>
                        <Box className="mr-4 my-1 sm:text-2xl text-xl">{isOpen3 ? "-" : "+"}</Box>
                    </Box>
                    <Collapse in={isOpen3} animateOpacity>
                        <Box bg="gray.700">
                            <Text className="sm:w-[500px] w-[300px] sm:text-sm text-xs px-4 py-2">
                                프라이빗 세일, 사전예약 판매로 구매하신 고객님은 23. 04. 28.
                                금요일에 NFT를 발급해 드립니다. 전체 판매에서 계좌이체로 구매하신
                                고객님과 이벤트 당첨되신 분들은 23. 05. 20. 금요일에 NFT를 발급해
                                드립니다.
                            </Text>
                        </Box>
                    </Collapse>
                    <Box
                        onClick={Toggle4}
                        className="sm:w-[500px] w-[300px] bg-gray-700 flex justify-between hover:cursor-pointer"
                    >
                        <Text className="ml-4 my-1">구매한 NFT는 환불이 가능한가요?</Text>
                        <Box className="mr-4 my-1 sm:text-2xl text-xl">{isOpen4 ? "-" : "+"}</Box>
                    </Box>
                    <Collapse in={isOpen4} animateOpacity>
                        <Box bg="gray.700">
                            <Text className="sm:w-[500px] w-[300px] sm:text-sm text-xs px-4 py-2">
                                구매한 NFT는 환불이 불가능합니다.
                            </Text>
                        </Box>
                    </Collapse>
                </Box>
            </Box>
        </Box>
    );
}

export default Original;
