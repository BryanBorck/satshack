import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import Home from "./pages/Home/Home";
import Bet from "./pages/Bet/Bet";
import MyBet from "./pages/MyBets/MyBets";
import Layout from "./pages/Layout/Layout";
import SuccessBet from "./pages/SuccessBet/SuccessBet";
import CreateTheme from "./pages/CreateTheme/CreateTheme";
import CreateBet from "./pages/CreateBet/CreateBet";

function App() {

  const [isUnisatInstalled, setIsUnisatInstalled] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [address, setAddress] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [balance, setBalance] = useState({
    confirmed: 0,
    unconfirmed: 0,
    total: 0,
  });
  
  const getBasicInfo = async () => {
    const unisat = window.unisat;
    if (!unisat) return;
  
    const [address] = await unisat.getAccounts();
    setAddress(address);

    const publicKey = await unisat.getPublicKey();
    setPublicKey(publicKey);
  
    const balance = await unisat.getBalance();
    setBalance(balance);
  };
  
  const handleAccountsChanged = (_accounts) => {
    if (accounts.length > 0 && accounts[0] === _accounts[0]) {
      // prevent from triggering twice
      return;
    }
    setAccounts(_accounts);
    if (_accounts.length > 0) {
      setAddress(_accounts[0]);
      getBasicInfo();
    }
  };
  
  useEffect(() => {
    async function checkUnisat() {
      let unisat = window.unisat;
  
      for (let i = 1; i < 10 && !unisat; i += 1) {
        await new Promise((resolve) => setTimeout(resolve, 100 * i));
        unisat = window.unisat;
      }
  
      if (unisat) {
        setIsUnisatInstalled(true);
        unisat.getAccounts().then((accounts) => {
          handleAccountsChanged(accounts);
        });
        unisat.on("accountsChanged", handleAccountsChanged);
  
        return () => {
          unisat.removeListener("accountsChanged", handleAccountsChanged);
        };
      }
    }
  
    checkUnisat().then();
  }, []);
  
  const unisat = window.unisat;

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout
                  unisat={unisat}
                  address={address}
                  publicKey={publicKey}
                  isUnisatInstalled={isUnisatInstalled}
                  handleAccountsChanged={handleAccountsChanged}
                />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/:id" element={<Bet />} />
                    <Route path="/mybet" element={<MyBet />} />
                    <Route path="/createbet" element={<CreateBet />} />
                    <Route path="/success" element={<SuccessBet />} />
                    <Route path="/createtheme" element={<CreateTheme />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
