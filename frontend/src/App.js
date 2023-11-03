import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Bet from "./pages/Bet/Bet";
import MyBet from "./pages/MyBets/MyBets";
import CreateBet from "./pages/CreateBet/CreateBet";
import Layout from "./pages/Layout/Layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/:id" element={<Bet />} />
                    <Route path="/mybet" element={<MyBet />} />
                    <Route path="/createbet/:id/:option" element={<CreateBet />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
