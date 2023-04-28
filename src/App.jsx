import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Original from "./page/originals";
import Detail from "./page/detail";
import Main from "./page/main";
import NotFound from "./page/notFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    const [account, setAccount] = useState("");

    return (
        <Box className="min-h-screen min-w-screen w-auto">
            <Header account={account} setAccount={setAccount} />
            <Routes>
                <Route path="/*" element={<NotFound />} />
                <Route path="/" element={<Original />} />
                <Route path="/main" element={<Main account={account} />} />
                <Route path="/:tokenId" element={<Detail />} />
            </Routes>
            <Footer />
        </Box>
    );
}

export default App;
