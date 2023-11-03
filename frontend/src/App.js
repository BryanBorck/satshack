import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Bet from "./pages/Bet/Bet";
import MyBet from "./pages/MyBets/MyBets";
import Layout from "./pages/Layout/Layout";
import SuccessBet from "./pages/SuccessBet/SuccessBet";
import CreateTheme from "./pages/CreateTheme/CreateTheme";
import CreateBet from "./pages/CreateBet/CreateBet";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/:id" element={<Bet />} />
                    <Route path="/mybet" element={<MyBet />} />
                    <Route path="/success" element={<SuccessBet />} />
                    <Route path="/createtheme" element={<CreateTheme />} />
                    <Route path="/createbet" element={<CreateBet />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
