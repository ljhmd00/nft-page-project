import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <Box className="bg-gray-900 min-h-screen flex flex-col justify-center items-center text-white sm:text-8xl text-xl text-center">
            <Link to="/">
                <Box className=" text-red-500">404</Box>
                <Box>Not Found</Box>
            </Link>
        </Box>
    );
}

export default NotFound;
